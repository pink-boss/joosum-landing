export interface DownloadStore {
  qr: string;
  icon: string;
  url: string;
}

export const downloadStores: DownloadStore[] = [
  {
    qr: '/images/ios-qr-code.png',
    icon: '/images/ios-store-download.png',
    url: 'https://apps.apple.com/kr/app/%EC%A3%BC%EC%84%AC-joosum/id6455258212',
  },
  {
    qr: '/images/aos-qr.png',
    icon: '/images/aos-store-download.png',
    url: 'https://play.google.com/store/apps/details?id=com.joosum.app',
  },
];
