export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor;
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent.toLowerCase()
  );
};

export const openJoosumApp = (): void => {
  if (isMobileDevice()) {
    // 모바일에서는 딥링크 시도 후 앱스토어로 폴백
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      // iOS: 앱 스킴 시도 후 앱스토어로 폴백
      const appScheme = "joosum://";
      const appStoreUrl = "https://apps.apple.com/app/joosum/id6450023650";

      // 앱 열기 시도
      window.location.href = appScheme;

      // 2초 후 앱이 열리지 않으면 앱스토어로 이동
      setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 2000);
    } else if (isAndroid) {
      // Android: 인텐트 URL 사용
      const intentUrl =
        "intent://open#Intent;scheme=joosum;package=com.joosum.app;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.joosum.app;end";
      window.location.href = intentUrl;
    } else {
      // 기타 모바일 디바이스는 웹으로
      window.open("https://app.joosum.com/", "_blank");
    }
  } else {
    // PC에서는 웹 URL로 이동
    window.open("https://app.joosum.com/", "_blank");
  }
};

// Contact 페이지로 이메일과 함께 이동하는 함수
export const redirectToContactWithEmail = (email: string): void => {
  const encodedEmail = encodeURIComponent(email);
  const contactUrl = `/contact?email=${encodedEmail}`;

  if (typeof window !== "undefined") {
    window.location.href = contactUrl;
  }
};
