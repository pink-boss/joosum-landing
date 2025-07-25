# Joosum Static Landing Page

주섬 서비스의 정적 랜딩 페이지입니다.

## 기능

- 반응형 디자인 (모바일, 태블릿, PC)
- 커스텀 색상 시스템
- 앱 다운로드 모달
- 문의하기 폼
- 이메일 자동 입력 기능

## SEO 및 성능 최적화

- **메타데이터 최적화**: Open Graph, Twitter Cards, 구조화된 데이터
- **성능 최적화**: 동적 임포트, 이미지 최적화, 폰트 최적화
- **접근성**: ARIA 라벨, 포커스 관리, 키보드 네비게이션
- **SEO**: sitemap.xml, robots.txt, 구조화된 데이터 (JSON-LD)
- **Web Vitals**: 성능 모니터링 및 최적화

## 이메일 설정

이메일 전송 기능을 사용하려면 Gmail 계정을 설정하고 환경변수를 설정해주세요.

### 1. Gmail 설정

1. Gmail 계정에서 2단계 인증을 활성화
2. [Google 계정 관리](https://myaccount.google.com/apppasswords)에서 앱 비밀번호 생성
3. "앱 비밀번호" 섹션에서 새 앱 비밀번호를 생성 (16자리 비밀번호가 생성됩니다)

### 2. 환경변수 설정

`.env.local` 파일을 생성하고 다음 내용을 추가:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASS=your-app-password
```

### 3. 주의사항

- `GMAIL_APP_PASS`는 Gmail 계정 비밀번호가 아닌 앱 비밀번호를 사용해야 합니다
- 2단계 인증이 활성화되어 있어야 앱 비밀번호를 생성할 수 있습니다
- 앱 비밀번호는 공백 없이 16자리로 입력해주세요

## 개발

```bash
npm run dev
```

## 빌드

```bash
npm run build
```

## 자동 배포

GitHub Actions를 이용하여 Docker 이미지를 빌드하고 원격 서버에 배포합니다.
배포 과정에서는 `ENV` 라는 GitHub Secret 값을 이용해 `.env` 파일을 생성하고,
해당 파일을 컨테이너 실행 시 사용합니다.
`.github/workflows/deploy.yml` 파일을 참고하세요.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

.
