export interface DownloadStore {
  qr: string;
  download: string;
}

export const downloadStores: DownloadStore[] = [
  {
    qr: "/images/ios-qr.png",
    download: "/images/ios-download.png",
  },
  {
    qr: "/images/aos-qr.png",
    download: "/images/aos-download.png",
  },
];

export const mockupData = {
  title: "목업이미지",
  description: "",
};
