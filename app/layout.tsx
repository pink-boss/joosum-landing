import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WebVitals from "./components/WebVitals";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "주섬 - 간편한 링크 아카이빙 서비스",
    template: "%s | 주섬",
  },
  description:
    "웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요. 주섬과 함께 나만의 디지털 아카이브를 만들어보세요.",
  keywords: [
    "링크 저장",
    "북마크",
    "아카이빙",
    "웹 클리핑",
    "정보 정리",
    "주섬",
    "joosum",
  ],
  authors: [{ name: "Joosum Team" }],
  creator: "Joosum",
  publisher: "Joosum",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://joosum.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "주섬 - 간편한 링크 아카이빙 서비스",
    description:
      "웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요. 주섬과 함께 나만의 디지털 아카이브를 만들어보세요.",
    url: "https://joosum.com",
    siteName: "주섬",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "주섬 - 간편한 링크 아카이빙 서비스",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "주섬 - 간편한 링크 아카이빙 서비스",
    description: "웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "naver-site-verification": "naver-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased`}>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
