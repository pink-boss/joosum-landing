'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import {
  ChangeEvent,
  FormEvent,
  useActionState,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';

import { Dialog } from 'radix-ui';

import { submitContactForm } from '@/actions/contact';

import FormField from '@/components/form-field';
import { SubmitCompleteModal, SubmitConfirmModal } from '@/components/modal';

import { useFormValidation } from '@/hooks';
import { clsx } from '@/utils/clsx';

import ContactPrivacyConsent from './contact-privacy-consent';

export default function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formRef = useRef<HTMLFormElement>(null);
  const isInitializedRef = useRef(false); // 초기화 여부를 추적하는 ref
  const timerId = useRef<NodeJS.Timeout | null>(null);

  const [state, formAction, isPending] = useActionState(submitContactForm, {});
  const [isTransitioning, startTransition] = useTransition();

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [contentLength, setContentLength] = useState(0);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const { refs, validateForm, validateField, clearValidationMessage } = useFormValidation();

  // 폼 유효성 검사
  const isFormValid = useMemo(
    () => email.includes('@') && subject.trim().length > 0 && content.trim().length > 0 && privacyChecked,
    [email, subject, content, privacyChecked],
  );

  // 실제 pending 상태 (두 상태 중 하나라도 true면 pending)
  const isSubmitting = useMemo(() => isPending || isTransitioning, [isPending, isTransitioning]);

  // URL 쿼리 파라미터에서 이메일 읽어오기
  useEffect(() => {
    if (isInitializedRef.current) return;

    try {
      const emailParam = searchParams.get('email');
      if (emailParam && !email) {
        const decodedEmail = decodeURIComponent(emailParam);
        setEmail(decodedEmail);
        clearValidationMessage('email');

        isInitializedRef.current = true;
      }
    } catch (error) {
      console.error('이메일 쿼리 파라미터 처리 중 오류:', error);
    }
  }, [searchParams, clearValidationMessage, email]);

  // 폼 제출 처리
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // 브라우저 validation 실행
      if (!validateForm({ email, subject, content, privacyChecked })) {
        const form = e.currentTarget;
        const firstInvalidField = form.querySelector(':invalid') as HTMLElement;
        if (firstInvalidField) {
          firstInvalidField.focus();
          form.reportValidity();
        }
        return;
      }

      setShowConfirmModal(true);
    },
    [validateForm, email, subject, content, privacyChecked],
  );

  // 제출 확인
  const handleConfirmSubmit = useCallback(() => {
    setShowConfirmModal(false);
    const form = formRef.current;
    if (form) {
      const formData = new FormData(form);
      startTransition(() => {
        formAction(formData);
      });
    }
  }, [formAction, startTransition]);

  // 입력값 변경 핸들러들
  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      clearValidationMessage('email');
    },
    [clearValidationMessage],
  );

  const handleEmailBlur = useCallback(() => {
    validateField('email', { email, subject, content, privacyChecked });
  }, [validateField, email, subject, content, privacyChecked]);

  const handleSubjectChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSubject(e.target.value);
      clearValidationMessage('subject');
    },
    [clearValidationMessage],
  );

  const handleSubjectBlur = useCallback(() => {
    validateField('subject', { email, subject, content, privacyChecked });
  }, [validateField, email, subject, content, privacyChecked]);

  const handleContentChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
      setContentLength(e.target.value.length);
      clearValidationMessage('content');
    },
    [clearValidationMessage],
  );

  const handleContentBlur = useCallback(() => {
    validateField('content', { email, subject, content, privacyChecked });
  }, [validateField, email, subject, content, privacyChecked]);

  const handlePrivacyChange = useCallback(
    (checked: boolean) => {
      setPrivacyChecked(checked);
      clearValidationMessage('privacy');
      // 체크박스는 바로 validation 실행
      timerId.current = setTimeout(() => {
        validateField('privacy', {
          email,
          subject,
          content,
          privacyChecked: checked,
        });
      }, 0);
    },
    [clearValidationMessage, validateField, email, subject, content],
  );

  const handleCompleteModalOpenChange = useCallback(
    (open: boolean) => {
      setShowCompleteModal(open);
      if (!open) {
        router.refresh();
        window.location.reload();
      }
    },
    [router],
  );

  useEffect(() => {
    if (state.success && !showCompleteModal) {
      const timerId = setTimeout(() => setShowCompleteModal(true), 100);
      return () => clearTimeout(timerId);
    }
  }, [state.success, showCompleteModal]);

  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  return (
    <>
      <div className="rounded-lg p-4 md:p-5">
        <form noValidate ref={formRef} className="space-y-6 md:space-y-3" onSubmit={handleSubmit}>
          {/* 필수입력항목 안내 */}
          <div className="text-right">
            <span className="text-sm text-black">*필수입력항목</span>
          </div>
          {/* 이메일 */}
          <FormField
            required
            description="답변은 이메일로 발송됩니다. 정확한 이메일을 입력해주세요."
            error={state.errors?.email?.[0]}
            label="이메일"
          >
            <input
              required
              ref={refs.emailRef}
              className="border-text-10 placeholder-neutral-550 focus:border-primary-500 h-11 w-full rounded-lg border px-4 text-sm focus:outline-none md:h-12 md:px-5 md:text-base"
              name="email"
              placeholder="이메일 주소를 입력해주세요."
              type="email"
              value={email}
              onBlur={handleEmailBlur}
              onChange={handleEmailChange}
            />
          </FormField>
          {/* 제목 */}
          <FormField required error={state.errors?.subject?.[0]} label="제목">
            <input
              required
              ref={refs.subjectRef}
              className="border-text-10 placeholder-neutral-550 focus:border-primary-500 h-11 w-full rounded-lg border px-4 text-sm focus:outline-none md:h-12 md:px-5 md:text-base"
              maxLength={60}
              name="subject"
              placeholder="제목을 입력해주세요."
              type="text"
              value={subject}
              onBlur={handleSubjectBlur}
              onChange={handleSubjectChange}
            />
          </FormField>
          {/* 문의내용 */}
          <FormField required error={state.errors?.content?.[0]} label="문의내용">
            <textarea
              required
              ref={refs.contentRef}
              className="border-text-10 placeholder-neutral-550 focus:border-primary-500 h-32 w-full resize-none rounded-lg border px-4 py-3 text-sm focus:outline-none md:h-48 md:px-5 md:text-base"
              maxLength={3000}
              name="content"
              placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
              value={content}
              onBlur={handleContentBlur}
              onChange={handleContentChange}
            />
            <div className="text-neutral-550 mt-2 text-right text-sm md:text-base">{contentLength}/ 3000</div>
          </FormField>
          {/* 부가정보 */}
          <FormField label="부가정보(선택)">
            <input
              className="border-text-10 placeholder-neutral-550 focus:border-primary-500 h-11 w-full rounded-lg border px-4 text-sm focus:outline-none md:h-12 md:px-5 md:text-base"
              maxLength={60}
              name="additionalInfo"
              placeholder="오류 신고 시 오류 발생 당시 사용한 OS/브라우저 정보를 남겨주세요."
              type="text"
            />
          </FormField>
          {/* 개인정보 수집 및 이용 동의 */}
          <FormField required error={state.errors?.privacy?.[0]} label="개인정보 수집 및 이용 동의">
            <ContactPrivacyConsent ref={refs.privacyRef} checked={privacyChecked} onChange={handlePrivacyChange} />
          </FormField>
          {/* 제출 버튼 */}
          <div className="flex justify-center pt-6 md:pt-8">
            <Dialog.Root open={showConfirmModal} onOpenChange={setShowConfirmModal}>
              <Dialog.Trigger asChild>
                <button
                  data-testid="submit_contact"
                  disabled={isSubmitting || !isFormValid}
                  type="submit"
                  className={clsx(
                    'h-12 w-full max-w-83.75 rounded-lg text-base font-semibold transition-all duration-200 md:h-14 md:text-lg',
                    isFormValid && !isSubmitting
                      ? 'bg-primary-500 text-white hover:opacity-80'
                      : 'cursor-not-allowed bg-gray-300 text-neutral-500',
                  )}
                >
                  {isSubmitting ? '제출 중...' : '제출하기'}
                </button>
              </Dialog.Trigger>
              <SubmitConfirmModal onConfirm={handleConfirmSubmit} />
            </Dialog.Root>
          </div>
          {state.error && (
            <div className="text-center">
              <p className="text-red-500">{state.error}</p>
            </div>
          )}
        </form>
      </div>
      <SubmitCompleteModal isOpen={showCompleteModal} onOpenChange={handleCompleteModalOpenChange} />
    </>
  );
}
