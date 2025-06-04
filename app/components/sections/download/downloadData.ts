export interface DownloadStore {
  qr: string;
  icon: string;
  url: string;
}

export const downloadStores: DownloadStore[] = [
  {
    qr: "/images/ios-qr.png",
    icon: "/images/ios-download.png",
    url: "https://apps.apple.com/kr/app/%EC%A3%BC%EC%84%AC-joosum/id6455258212",
  },
  {
    qr: "/images/aos-qr.png",
    icon: "/images/aos-download.png",
    url: "https://play.google.com/store/apps/details?id=com.joosum.app",
  },
];

export const mockupData = {
  title: "목업이미지",
  description: "",
};
