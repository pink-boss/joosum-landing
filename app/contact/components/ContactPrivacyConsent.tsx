import Link from 'next/link';

import { forwardRef } from 'react';

interface ContactPrivacyConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

const ContactPrivacyConsent = forwardRef<
  HTMLInputElement,
  ContactPrivacyConsentProps
>(({ checked, onChange, error }, ref) => {
  return (
    <div className="my-3 flex items-start gap-3">
      <div className="relative mt-0.5">
        <input
          required
          ref={ref}
          checked={checked}
          className="border-primary-500 checked:bg-primary-500 focus:ring-primary-500 h-5 w-5 appearance-none rounded border-2 bg-white focus:ring-2 focus:ring-offset-1 focus:outline-none"
          id="privacy"
          name="privacy"
          type="checkbox"
          value="agreed"
          onChange={(e) => onChange(e.target.checked)}
        />
        {checked && (
          <svg
            className="pointer-events-none absolute top-0.5 left-0.5 h-4 w-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              clipRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              fillRule="evenodd"
            />
          </svg>
        )}
      </div>
      <div>
        <label
          className="text-base leading-6 font-medium text-black md:text-lg"
          htmlFor="privacy"
        >
          문의 서비스 이용을 위한 개인정보 수집 및 이용에 동의합니다.
        </label>
        <p className="text-neutral-550 mt-3 text-sm leading-5 font-medium md:text-base md:leading-6">
          수집하는 개인정보 : 이메일 주소
          <br />
          문의내용 보유기간 : 접수일로부터 30일
          <br />
          <Link
            className="underline transition-colors hover:text-neutral-500"
            href="https://joosum.notion.site/a078243be717462296cbe664a121212c"
            rel="noopener noreferrer"
            target="_blank"
          >
            내용 전체보기
          </Link>
        </p>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    </div>
  );
});

ContactPrivacyConsent.displayName = 'ContactPrivacyConsent';

export default ContactPrivacyConsent;
