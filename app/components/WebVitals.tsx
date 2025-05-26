"use client";

import { useReportWebVitals } from "next/web-vitals";

export default function WebVitals() {
  useReportWebVitals((metric) => {
    // 개발 환경에서만 콘솔에 출력
    if (process.env.NODE_ENV === "development") {
      console.log(metric);
    }

    // 프로덕션에서는 분석 도구로 전송
    // 예: Google Analytics, Vercel Analytics 등
    if (process.env.NODE_ENV === "production") {
      // analytics.track('Web Vital', metric);
    }
  });

  return null;
}
