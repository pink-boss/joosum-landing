import { forwardRef } from "react";
import Link from "next/link";

interface PrivacyConsentProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

const PrivacyConsent = forwardRef<HTMLInputElement, PrivacyConsentProps>(
  ({ checked, onChange, error }, ref) => {
    return (
      <div className="flex items-start gap-3 my-3">
        <div className="relative mt-0.5">
          <input
            ref={ref}
            id="privacy"
            type="checkbox"
            name="privacy"
            value="agreed"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="w-5 h-5 appearance-none border-2 border-primary-500 rounded bg-white checked:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
            required
          />
          {checked && (
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
        <div>
          <label
            htmlFor="privacy"
            className="text-base md:text-lg font-medium text-black leading-6"
          >
            문의 서비스 이용을 위한 개인정보 수집 및 이용에 동의합니다.
          </label>
          <p className="mt-3 text-sm md:text-base text-neutral-550 font-medium leading-5 md:leading-6">
            수집하는 개인정보 : 이메일 주소
            <br />
            문의내용 보유기간 : 접수일로부터 30일
            <br />
            <Link
              href="https://joosum.notion.site/a078243be717462296cbe664a121212c"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary-500 transition-colors"
            >
              내용 전체보기
            </Link>
          </p>
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
      </div>
    );
  }
);

PrivacyConsent.displayName = "PrivacyConsent";

export default PrivacyConsent;
