import { Suspense } from "react";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "주섬 서비스에 대한 궁금한 점이나 건의사항을 문의해주세요. 3~5일 이내에 답변드립니다.",
  openGraph: {
    title: "문의하기 | 주섬",
    description: "주섬 서비스에 대한 궁금한 점이나 건의사항을 문의해주세요.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-neutral-50 py-8 md:py-12 lg:py-[60px]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10 lg:px-20">
        {/* 헤더 */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-500 mb-3 md:mb-4">
            주섬 문의하기
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[#2f2f2f] leading-6 md:leading-7">
            궁금하신 점이나 건의하실 내용이 있으신가요?
            <br />
            아래 폼을 작성하여 제출하면 꼼꼼히 살펴보고 답해드릴게요.
          </p>
        </div>

        {/* 폼 - Suspense로 감싸서 useSearchParams 사용 */}
        <Suspense
          fallback={
            <div className="bg-white rounded-lg p-4 md:p-5 flex items-center justify-center h-96">
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
