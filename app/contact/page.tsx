import type { Metadata } from 'next';

import { Suspense } from 'react';

import { ContactForm } from './components';

export const metadata: Metadata = {
  title: '문의하기',
  description:
    '주섬 서비스에 대한 궁금한 점이나 건의사항을 문의해주세요. 3~5일 이내에 답변드립니다.',
  openGraph: {
    title: '문의하기 | 주섬',
    description: '주섬 서비스에 대한 궁금한 점이나 건의사항을 문의해주세요.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div
      className="w-full bg-neutral-50 py-8 md:py-12 lg:py-[60px]"
      data-testid="contact"
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 lg:px-20">
        {/* 헤더 */}
        <div className="mb-8 text-center md:mb-10">
          <h1 className="text-primary-500 mb-3 text-2xl font-extrabold md:mb-4 md:text-3xl lg:text-4xl">
            주섬 문의하기
          </h1>
          <p className="text-base leading-6 text-[#2f2f2f] md:text-lg md:leading-7 lg:text-xl">
            궁금하신 점이나 건의하실 내용이 있으신가요?
            <br />
            아래 폼을 작성하여 제출하면 꼼꼼히 살펴보고 답해드릴게요.
          </p>
        </div>
        {/* 폼 - Suspense로 감싸서 useSearchParams 사용 */}
        <Suspense
          fallback={
            <div className="flex h-96 items-center justify-center rounded-lg bg-white p-4 md:p-5">
              <div className="text-neutral-500">로딩 중...</div>
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
