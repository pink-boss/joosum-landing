"use client";

import { useActionState, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// 폼 상태 타입 정의
interface FormState {
  success?: boolean;
  error?: string;
  errors?: {
    email?: string[];
    subject?: string[];
    content?: string[];
    privacy?: string[];
  };
}

// 서버 액션 시뮬레이션 (실제로는 서버에서 처리)
async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // 폼 데이터 추출
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;
  // const additionalInfo = formData.get("additionalInfo") as string;
  const privacy = formData.get("privacy") as string;

  // 유효성 검사
  const errors: FormState["errors"] = {};

  if (!email || !email.includes("@")) {
    errors.email = ["올바른 이메일 주소를 입력해주세요."];
  }

  if (!subject || subject.trim().length === 0) {
    errors.subject = ["제목을 입력해주세요."];
  }

  if (!content || content.trim().length === 0) {
    errors.content = ["문의내용을 입력해주세요."];
  }

  if (!privacy) {
    errors.privacy = ["개인정보 수집 및 이용에 동의해주세요."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // 제출 처리 시뮬레이션 (2초 지연)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}

// 제출 확인 모달 컴포넌트
function SubmitConfirmModal({
  isOpen,
  onCancel,
  onConfirm,
}: {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-[0.82]"
        onClick={onCancel}
      />
      <div className="relative bg-white rounded-[10px] w-[90vw] max-w-[422px] h-auto min-h-[254px] p-4 md:p-5">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center py-6 md:py-8">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
              문의를 제출 하시겠습니까?
            </h2>
            <p className="text-sm md:text-base text-[#2f2f2f] leading-5 md:leading-[19px]">
              답변은 3~5일 이내 <br />
              입력한 메일주소로 보내드립니다.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 h-12 md:h-14 bg-[#bbbbbb] text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              취소
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-12 md:h-14 bg-primary-500 text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 제출 완료 모달 컴포넌트
function SubmitCompleteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-[0.82]"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[10px] w-[90vw] max-w-[422px] h-auto min-h-[200px] p-4 md:p-5">
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center py-6 md:py-8">
            <h2 className="text-xl md:text-2xl font-bold text-black text-center">
              문의가 제출 되었습니다.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-full h-12 md:h-14 bg-primary-500 text-white rounded-lg font-bold text-sm md:text-base hover:opacity-80 transition-opacity"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [contentLength, setContentLength] = useState(0);
  const [email, setEmail] = useState("");

  const searchParams = useSearchParams();

  // URL 쿼리 파라미터에서 이메일 읽어오기
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      // URL 디코딩하여 이메일 설정
      const decodedEmail = decodeURIComponent(emailParam);
      setEmail(decodedEmail);
    }
  }, [searchParams]);

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };

  // 제출 확인
  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    const form = document.getElementById("contact-form") as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      formAction(formData);
    }
  };

  // 제출 성공 시 완료 모달 표시
  if (state.success && !showCompleteModal) {
    setTimeout(() => setShowCompleteModal(true), 100);
  }

  return (
    <>
      {/* 폼 */}
      <div className="bg-white rounded-lg p-4 md:p-5">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-8"
        >
          {/* 필수입력항목 안내 */}
          <div className="text-right">
            <span className="text-sm text-black">*필수입력항목</span>
          </div>

          {/* 이메일 */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:w-[280px] flex items-start pt-1 md:pt-3">
              <span className="text-lg md:text-xl font-semibold text-black">
                이메일
              </span>
              <span className="text-lg md:text-xl font-semibold text-black ml-1">
                *
              </span>
            </div>
            <div className="flex-1">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력해주세요."
                className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                required
              />
              <p className="mt-2 text-sm md:text-base text-neutral-500 font-medium">
                답변은 이메일로 발송됩니다. 정확한 이메일을 입력해주세요.
              </p>
              {state.errors?.email && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.email[0]}
                </p>
              )}
            </div>
          </div>

          {/* 제목 */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:w-[280px] flex items-center">
              <span className="text-lg md:text-xl font-semibold text-black">
                제목
              </span>
              <span className="text-lg md:text-xl font-semibold text-black ml-1">
                *
              </span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="subject"
                placeholder="제목을 입력해주세요."
                className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                required
              />
              {state.errors?.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.subject[0]}
                </p>
              )}
            </div>
          </div>

          {/* 문의내용 */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:w-[280px] flex items-start pt-1 md:pt-3">
              <span className="text-lg md:text-xl font-semibold text-black">
                문의내용
              </span>
              <span className="text-lg md:text-xl font-semibold text-black ml-1">
                *
              </span>
            </div>
            <div className="flex-1">
              <textarea
                name="content"
                placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
                className="w-full px-4 md:px-5 py-3 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-primary-500 resize-none h-32 md:h-48"
                maxLength={3000}
                onChange={(e) => setContentLength(e.target.value.length)}
                required
              />
              <div className="mt-2 text-right text-sm md:text-base text-neutral-500">
                {contentLength}/ 3000
              </div>
              {state.errors?.content && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.content[0]}
                </p>
              )}
            </div>
          </div>

          {/* 부가정보 (선택) */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:w-[280px] flex items-center">
              <span className="text-lg md:text-xl font-semibold text-black">
                부가정보(선택)
              </span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="additionalInfo"
                placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
                className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-500 focus:outline-none focus:border-primary-500"
              />
            </div>
          </div>

          {/* 개인정보 수집 및 이용 동의 */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5">
            <div className="md:w-[280px] flex items-start pt-1 md:pt-3">
              <span className="text-lg md:text-xl font-semibold text-black">
                개인정보 수집 및 이용 동의
              </span>
              <span className="text-lg md:text-xl font-semibold text-black ml-1">
                *
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    name="privacy"
                    value="agreed"
                    checked={privacyChecked}
                    onChange={(e) => setPrivacyChecked(e.target.checked)}
                    className="w-5 h-5 appearance-none border-2 border-primary-500 rounded bg-white checked:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                    required
                  />
                  {privacyChecked && (
                    <svg
                      className="absolute top-0.5 left-0.5 w-4 h-4 text-white pointer-events-none"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-base md:text-lg font-medium text-black leading-6">
                  문의 서비스 이용을 위한 개인정보 수집 및 이용에 동의합니다.
                </span>
              </div>
              <p className="text-sm md:text-base text-neutral-500 font-medium leading-5 md:leading-6">
                수집하는 개인정보 : 이메일 주소
                <br />
                문의내용 보유기간 : 접수일로부터 30일
                <br />
                내용 전체보기
              </p>
              {state.errors?.privacy && (
                <p className="mt-1 text-sm text-red-500">
                  {state.errors.privacy[0]}
                </p>
              )}
            </div>
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-center pt-6 md:pt-8">
            <button
              type="submit"
              disabled={isPending}
              className="w-full max-w-[335px] h-12 md:h-14 bg-primary-500 text-white rounded-lg font-semibold text-base md:text-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "제출 중..." : "제출하기"}
            </button>
          </div>

          {/* 에러 메시지 */}
          {state.error && (
            <div className="text-center">
              <p className="text-red-500">{state.error}</p>
            </div>
          )}
        </form>
      </div>

      {/* 모달들 */}
      <SubmitConfirmModal
        isOpen={showConfirmModal}
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmSubmit}
      />

      <SubmitCompleteModal
        isOpen={showCompleteModal}
        onClose={() => {
          setShowCompleteModal(false);
          // 폼 초기화
          const form = document.getElementById(
            "contact-form"
          ) as HTMLFormElement;
          if (form) {
            form.reset();
            setEmail("");
            setPrivacyChecked(false);
            setContentLength(0);
          }
        }}
      />
    </>
  );
}
