import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import StructuredData from '@/components/StructuredData';
import WebVitals from '@/components/WebVitals';
import Footer from '@/layouts/Footer';
import Gnb from '@/layouts/Gnb';

import './globals.css';

const pretendard = localFont({
  src: '../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: {
    default: '주섬 - 간편한 링크 아카이빙 서비스',
    template: '%s | 주섬',
  },
  description:
    '웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요. 주섬과 함께 나만의 디지털 아카이브를 만들어보세요.',
  keywords: [
    '링크 저장',
    '북마크',
    '아카이빙',
    '웹 클리핑',
    '정보 정리',
    '주섬',
    'joosum',
  ],
  authors: [{ name: 'Joosum Team' }],
  creator: 'Joosum',
  publisher: 'Joosum',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://joosum.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '주섬 - 간편한 링크 아카이빙 서비스',
    description:
      '웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요. 주섬과 함께 나만의 디지털 아카이브를 만들어보세요.',
    url: 'https://joosum.com',
    siteName: '주섬',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '주섬 - 간편한 링크 아카이빙 서비스',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '주섬 - 간편한 링크 아카이빙 서비스',
    description: '웹에서 발견한 유용한 링크들을 간편하게 저장하고 정리하세요.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'naver-site-verification': 'naver-verification-code',
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
      <head>
        <StructuredData />
      </head>
      <body className={`${pretendard.variable} antialiased`}>
        <GoogleTagManager gtmId="GTM-K4FXLG7Z" />
        <WebVitals />
        <div className="min-h-screen w-full bg-white">
          <Gnb />
          <main className="w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
