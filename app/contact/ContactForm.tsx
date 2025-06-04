"use client";

import { useActionState, useState, useEffect, useTransition } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { submitContactForm } from "../actions/contact";
import FormField from "../components/FormField";
import PrivacyConsent from "../components/PrivacyConsent";
import { SubmitConfirmModal, SubmitCompleteModal } from "../components/Modal";
import useFormValidation from "../hooks/useFormValidation";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {});
  const [isTransitioning, startTransition] = useTransition();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [contentLength, setContentLength] = useState(0);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const { refs, validateForm, validateField, clearValidationMessage } =
    useFormValidation();

  // 폼 유효성 검사
  const isFormValid =
    email.includes("@") &&
    subject.trim().length > 0 &&
    content.trim().length > 0 &&
    privacyChecked;

  // 실제 pending 상태 (두 상태 중 하나라도 true면 pending)
  const isSubmitting = isPending || isTransitioning;

  // URL 쿼리 파라미터에서 이메일 읽어오기
  useEffect(() => {
    try {
      const emailParam = searchParams.get("email");
      if (emailParam) {
        const decodedEmail = decodeURIComponent(emailParam);
        setEmail(decodedEmail);
        clearValidationMessage("email");
      }
    } catch (error) {
      console.error("이메일 쿼리 파라미터 처리 중 오류:", error);
    }
  }, [searchParams, clearValidationMessage]);

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 브라우저 validation 실행
    if (!validateForm({ email, subject, content, privacyChecked })) {
      const form = e.currentTarget;
      const firstInvalidField = form.querySelector(":invalid") as HTMLElement;
      if (firstInvalidField) {
        firstInvalidField.focus();
        form.reportValidity();
      }
      return;
    }

    setShowConfirmModal(true);
  };

  // 제출 확인
  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    const form = document.getElementById("contact-form") as HTMLFormElement;
    if (form) {
      const formData = new FormData(form);
      startTransition(() => {
        formAction(formData);
      });
    }
  };

  // 입력값 변경 핸들러들
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    clearValidationMessage("email");
  };

  const handleEmailBlur = () => {
    validateField("email", { email, subject, content, privacyChecked });
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    clearValidationMessage("subject");
  };

  const handleSubjectBlur = () => {
    validateField("subject", { email, subject, content, privacyChecked });
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setContentLength(e.target.value.length);
    clearValidationMessage("content");
  };

  const handleContentBlur = () => {
    validateField("content", { email, subject, content, privacyChecked });
  };

  const handlePrivacyChange = (checked: boolean) => {
    setPrivacyChecked(checked);
    clearValidationMessage("privacy");
    // 체크박스는 바로 validation 실행
    setTimeout(() => {
      validateField("privacy", {
        email,
        subject,
        content,
        privacyChecked: checked,
      });
    }, 0);
  };

  // 제출 성공 시 완료 모달 표시
  if (state.success && !showCompleteModal) {
    setTimeout(() => setShowCompleteModal(true), 100);
  }

  return (
    <>
      <div className="rounded-lg p-4 md:p-5">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="space-y-6 md:space-y-3"
          noValidate
        >
          {/* 필수입력항목 안내 */}
          <div className="text-right">
            <span className="text-sm text-black">*필수입력항목</span>
          </div>

          {/* 이메일 */}
          <FormField
            label="이메일"
            required
            error={state.errors?.email?.[0]}
            description="답변은 이메일로 발송됩니다. 정확한 이메일을 입력해주세요."
          >
            <input
              ref={refs.emailRef}
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder="이메일 주소를 입력해주세요."
              className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-550 focus:outline-none focus:border-primary-500"
              required
            />
          </FormField>

          {/* 제목 */}
          <FormField label="제목" required error={state.errors?.subject?.[0]}>
            <input
              ref={refs.subjectRef}
              type="text"
              name="subject"
              value={subject}
              onChange={handleSubjectChange}
              onBlur={handleSubjectBlur}
              placeholder="제목을 입력해주세요."
              className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-550 focus:outline-none focus:border-primary-500"
              maxLength={60}
              required
            />
          </FormField>

          {/* 문의내용 */}
          <FormField
            label="문의내용"
            required
            error={state.errors?.content?.[0]}
          >
            <textarea
              ref={refs.contentRef}
              name="content"
              value={content}
              placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
              className="w-full px-4 md:px-5 py-3 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-550 focus:outline-none focus:border-primary-500 resize-none h-32 md:h-48"
              maxLength={3000}
              onChange={handleContentChange}
              onBlur={handleContentBlur}
              required
            />
            <div className="mt-2 text-right text-sm md:text-base text-neutral-550">
              {contentLength}/ 3000
            </div>
          </FormField>

          {/* 부가정보 */}
          <FormField label="부가정보(선택)">
            <input
              type="text"
              name="additionalInfo"
              placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
              className="w-full h-11 md:h-12 px-4 md:px-5 border border-text-10 rounded-lg text-sm md:text-base placeholder-neutral-550 focus:outline-none focus:border-primary-500"
              maxLength={60}
            />
          </FormField>

          {/* 개인정보 수집 및 이용 동의 */}
          <FormField
            label="개인정보 수집 및 이용 동의"
            required
            error={state.errors?.privacy?.[0]}
          >
            <PrivacyConsent
              ref={refs.privacyRef}
              checked={privacyChecked}
              onChange={handlePrivacyChange}
            />
          </FormField>

          {/* 제출 버튼 */}
          <div className="flex justify-center pt-6 md:pt-8">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`w-full max-w-[335px] h-12 md:h-14 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 ${
                isFormValid && !isSubmitting
                  ? "bg-primary-500 text-white hover:opacity-80"
                  : "bg-gray-300 text-neutral-500 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "제출 중..." : "제출하기"}
            </button>
          </div>

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
          router.refresh();
          window.location.reload();
        }}
      />
    </>
  );
}
