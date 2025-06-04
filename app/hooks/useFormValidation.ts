import { useRef } from "react";

interface FormValidationProps {
  email: string;
  subject: string;
  content: string;
  privacyChecked: boolean;
}

export default function useFormValidation() {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const privacyRef = useRef<HTMLInputElement>(null);

  const validateForm = ({
    email,
    subject,
    content,
    privacyChecked,
  }: FormValidationProps): boolean => {
    let isValid = true;

    // 이메일 validation
    if (emailRef.current) {
      if (!email) {
        emailRef.current.setCustomValidity("이메일 주소를 입력해주세요.");
        isValid = false;
      } else if (!email.includes("@")) {
        emailRef.current.setCustomValidity(
          "올바른 이메일 주소를 입력해주세요."
        );
        isValid = false;
      } else {
        emailRef.current.setCustomValidity("");
      }
    }

    // 제목 validation
    if (subjectRef.current) {
      if (!subject.trim()) {
        subjectRef.current.setCustomValidity("제목을 입력해주세요.");
        isValid = false;
      } else {
        subjectRef.current.setCustomValidity("");
      }
    }

    // 내용 validation
    if (contentRef.current) {
      if (!content.trim()) {
        contentRef.current.setCustomValidity("문의내용을 입력해주세요.");
        isValid = false;
      } else {
        contentRef.current.setCustomValidity("");
      }
    }

    // 개인정보 동의 validation
    if (privacyRef.current) {
      if (!privacyChecked) {
        privacyRef.current.setCustomValidity(
          "개인정보 수집 및 이용에 동의해주세요."
        );
        isValid = false;
      } else {
        privacyRef.current.setCustomValidity("");
      }
    }

    return isValid;
  };

  const validateField = (
    field: "email" | "subject" | "content" | "privacy",
    { email, subject, content, privacyChecked }: FormValidationProps
  ): boolean => {
    let isValid = true;

    switch (field) {
      case "email":
        if (emailRef.current) {
          if (!email) {
            emailRef.current.setCustomValidity("이메일 주소를 입력해주세요.");
            emailRef.current.reportValidity();
            isValid = false;
          } else if (!email.includes("@")) {
            emailRef.current.setCustomValidity(
              "올바른 이메일 주소를 입력해주세요."
            );
            emailRef.current.reportValidity();
            isValid = false;
          } else {
            emailRef.current.setCustomValidity("");
          }
        }
        break;
      case "subject":
        if (subjectRef.current) {
          if (!subject.trim()) {
            subjectRef.current.setCustomValidity("제목을 입력해주세요.");
            subjectRef.current.reportValidity();
            isValid = false;
          } else {
            subjectRef.current.setCustomValidity("");
          }
        }
        break;
      case "content":
        if (contentRef.current) {
          if (!content.trim()) {
            contentRef.current.setCustomValidity("문의내용을 입력해주세요.");
            contentRef.current.reportValidity();
            isValid = false;
          } else {
            contentRef.current.setCustomValidity("");
          }
        }
        break;
      case "privacy":
        if (privacyRef.current) {
          if (!privacyChecked) {
            privacyRef.current.setCustomValidity(
              "개인정보 수집 및 이용에 동의해주세요."
            );
            privacyRef.current.reportValidity();
            isValid = false;
          } else {
            privacyRef.current.setCustomValidity("");
          }
        }
        break;
    }

    return isValid;
  };

  const clearValidationMessage = (
    field: "email" | "subject" | "content" | "privacy"
  ) => {
    switch (field) {
      case "email":
        if (emailRef.current) emailRef.current.setCustomValidity("");
        break;
      case "subject":
        if (subjectRef.current) subjectRef.current.setCustomValidity("");
        break;
      case "content":
        if (contentRef.current) contentRef.current.setCustomValidity("");
        break;
      case "privacy":
        if (privacyRef.current) privacyRef.current.setCustomValidity("");
        break;
    }
  };

  return {
    refs: { emailRef, subjectRef, contentRef, privacyRef },
    validateForm,
    validateField,
    clearValidationMessage,
  };
}
