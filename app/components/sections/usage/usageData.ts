export interface UsageItem {
  tag: string;
  title: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  image: {
    mobile: string;
    tablet: string;
  };
}

export const usageData: UsageItem[] = [
  {
    tag: "쉬운확인",
    title: {
      mobile: "모바일에서 저장하고\nPC에서 확인하세요",
      tablet: "나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!",
      desktop: "나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!",
    },
    description: {
      mobile:
        "어느 기기에서나 편하게 확인해보세요!\n스마트폰, 태블릿, PC에서 저장해뒀던 콘텐츠를 다시 열어볼 수 있어요",
      tablet: "공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.",
      desktop:
        "공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.",
    },
    image: {
      mobile: "/images/usage/share-iphone.png",
      tablet: "/images/usage/share-ipad.png",
    },
  },
  {
    tag: "어디서든 확인",
    title: {
      mobile: "언제 어디서든\n저장한 콘텐츠 확인",
      tablet: "스마트폰, 태블릿, PC\n어디서든 동일한 경험",
      desktop: "스마트폰, 태블릿, PC\n어디서든 동일한 경험",
    },
    description: {
      mobile:
        "집에서는 PC로, 이동 중에는 스마트폰으로\n언제든 저장한 콘텐츠를 확인할 수 있어요",
      tablet: "모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.",
      desktop: "모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.",
    },
    image: {
      mobile: "/images/hero/hero-iphone.png",
      tablet: "/images/hero/hero-ipad.png",
    },
  },
  {
    tag: "나만의 폴더",
    title: {
      mobile: "관심사별로\n폴더를 만들어 정리",
      tablet: "카테고리별 폴더로\n체계적인 콘텐츠 관리",
      desktop: "카테고리별 폴더로\n체계적인 콘텐츠 관리",
    },
    description: {
      mobile: "업무, 취미, 공부 등\n원하는 대로 폴더를 만들어 정리하세요",
      tablet: "폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.",
      desktop: "폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.",
    },
    image: {
      mobile: "/images/usage/folder-iphone.png",
      tablet: "/images/usage/folder-ipad.png",
    },
  },
  {
    tag: "태그로 구분",
    title: {
      mobile: "태그를 활용한\n스마트한 분류",
      tablet: "태그 시스템으로\n더욱 세밀한 분류 가능",
      desktop: "태그 시스템으로\n더욱 세밀한 분류 가능",
    },
    description: {
      mobile: "여러 태그를 붙여서\n다양한 방식으로 콘텐츠를 찾아보세요",
      tablet:
        "하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.",
      desktop:
        "하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.",
    },
    image: {
      mobile: "/images/usage/tag-iphone.png",
      tablet: "/images/usage/tag-ipad.png",
    },
  },
  {
    tag: "잊지않게 알림",
    title: {
      mobile: "중요한 콘텐츠\n알림으로 리마인드",
      tablet: "설정한 시간에\n알림으로 다시 확인",
      desktop: "설정한 시간에\n알림으로 다시 확인",
    },
    description: {
      mobile: "나중에 꼭 봐야 할 콘텐츠는\n알림을 설정해서 놓치지 마세요",
      tablet: "원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.",
      desktop: "원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.",
    },
    image: {
      mobile: "/images/usage/notification-iphone.png",
      tablet: "/images/usage/notification-ipad.png",
    },
  },
];
