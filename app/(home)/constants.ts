export interface UsageItem {
  tag: string;
  title: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  image: {
    mobile: string;
    tablet: string;
  };
}

export const usageData: UsageItem[] = [
  {
    tag: '쉬운확인',
    title: {
      mobile: '모바일에서 저장하고\nPC에서 확인하세요',
      tablet: '나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!',
      desktop: '나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!',
    },
    description: {
      mobile:
        '어느 기기에서나 편하게 확인해보세요!\n스마트폰, 태블릿, PC에서 저장해뒀던 콘텐츠를 다시 열어볼 수 있어요',
      tablet: '공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.',
      desktop: '공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.',
    },
    image: {
      mobile: '/images/home-share-iphone.png',
      tablet: '/images/home-share-ipad.png',
    },
  },
  {
    tag: '어디서든 확인',
    title: {
      mobile: '언제 어디서든\n저장한 콘텐츠 확인',
      tablet: '스마트폰, 태블릿, PC\n어디서든 동일한 경험',
      desktop: '스마트폰, 태블릿, PC\n어디서든 동일한 경험',
    },
    description: {
      mobile: '집에서는 PC로, 이동 중에는 스마트폰으로\n언제든 저장한 콘텐츠를 확인할 수 있어요',
      tablet: '모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.',
      desktop: '모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.',
    },
    image: {
      mobile: '/images/home-linked-iphone.png',
      tablet: '/images/home-linked-ipad.png',
    },
  },
  {
    tag: '나만의 폴더',
    title: {
      mobile: '관심사별로\n폴더를 만들어 정리',
      tablet: '카테고리별 폴더로\n체계적인 콘텐츠 관리',
      desktop: '카테고리별 폴더로\n체계적인 콘텐츠 관리',
    },
    description: {
      mobile: '업무, 취미, 공부 등\n원하는 대로 폴더를 만들어 정리하세요',
      tablet: '폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.',
      desktop: '폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.',
    },
    image: {
      mobile: '/images/home-folder-iphone.png',
      tablet: '/images/home-folder-ipad.png',
    },
  },
  {
    tag: '태그로 구분',
    title: {
      mobile: '태그를 활용한\n스마트한 분류',
      tablet: '태그 시스템으로\n더욱 세밀한 분류 가능',
      desktop: '태그 시스템으로\n더욱 세밀한 분류 가능',
    },
    description: {
      mobile: '여러 태그를 붙여서\n다양한 방식으로 콘텐츠를 찾아보세요',
      tablet: '하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.',
      desktop: '하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.',
    },
    image: {
      mobile: '/images/home-tag-iphone.png',
      tablet: '/images/home-tag-ipad.png',
    },
  },
  {
    tag: '잊지않게 알림',
    title: {
      mobile: '중요한 콘텐츠\n알림으로 리마인드',
      tablet: '설정한 시간에\n알림으로 다시 확인',
      desktop: '설정한 시간에\n알림으로 다시 확인',
    },
    description: {
      mobile: '나중에 꼭 봐야 할 콘텐츠는\n알림을 설정해서 놓치지 마세요',
      tablet: '원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.',
      desktop: '원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.',
    },
    image: {
      mobile: '/images/home-notification-iphone.png',
      tablet: '/images/home-notification-ipad.png',
    },
  },
];

export interface ReviewItem {
  title: string;
  rating: number;
  content: string;
  author: string;
}

export const reviewData: ReviewItem[] = [
  {
    title: '매번 뭐든 저장해놓고\n3년동안 안 보던 사람',
    rating: 5,
    content:
      '매번 뭐든 저장해놓고 3년동안 안 보던 사람 .. 의 후기 이런 어플 어디 없나 항상 생각하고 있었는데 ...! 저의 마음을 읽어버린 개발자분들 박수드려👏 인스타에서도 항상 저장만 해두고 꺼내보기까지 시간이 많이 걸렸었는데 이 어플 홈화면에 두니까 너무 편리하게 꺼내먹을 수 있어서 좋아요 !! (후략)',
    author: '토끼귀엽',
  },
  {
    title: 'TMI 수집러에게\n꼭 필요했던 어플',
    rating: 5,
    content:
      '제가 기다리던 어플이 드디어 등장했네요 ㅜㅜㅜ 메모장에 링크만 수백개인데 어디계신가요 ~~~ 개발자분 ㅜㅜㅜ\n이 어플 제가 끝까지 함께할겁니다',
    author: '만두정마니님',
  },
  {
    title: '링크만 저장해서\n다시 찾기 편해요!!',
    rating: 5,
    content:
      '원래 링크 저장을 기본 메모어플이나 카카오톡 자기채팅에 보내곤 했는데 이 어플 쓰고나서부터 다시 봐야하는 링크들을 카테고리별로 저장하기 너무 좋네요! 추천박구 가요!!',
    author: '토끼귀엽',
  },
  {
    title: '정말 유용한\n링크 관리 앱',
    rating: 5,
    content:
      '북마크 기능보다 훨씬 편리하고 직관적이에요. 폴더별로 정리할 수 있어서 나중에 찾기도 쉽고, 태그 기능도 정말 유용합니다. 이런 앱을 기다리고 있었어요!',
    author: '링크수집가',
  },
  {
    title: '깔끔하고\n사용하기 편해요',
    rating: 4,
    content:
      'UI가 깔끔하고 사용법도 간단해서 좋아요. 공유하기로 바로 저장할 수 있는 기능이 특히 마음에 들어요. 앞으로 더 많은 기능이 추가되길 기대합니다.',
    author: '디지털노마드',
  },
  {
    title: '업무용으로\n최고예요!',
    rating: 5,
    content:
      '업무 관련 자료들을 프로젝트별로 정리해서 저장하고 있어요. 팀원들과 공유하기도 편하고, 검색 기능도 빠르고 정확해서 업무 효율이 많이 올랐습니다.',
    author: '프로젝트매니저',
  },
];
