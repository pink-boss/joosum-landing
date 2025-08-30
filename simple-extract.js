// 간단한 버전 - 괄호 포함 추출
const extractWithParentheses = (log) => log.match(/\([^)]*\)/g) || [];

// 간단한 버전 - 괄호 내용만 추출
const extractContentOnly = (log) => {
  const matches = log.match(/\(([^)]*)\)/g) || [];
  return matches.map((match) => match.slice(1, -1));
};

// 테스트
const log =
  'log=@s045,$type,4,$c,0,000000,$bb,0,000442,$hbut,0,$rebut,0,$vol,0,0,$pbut,1,$put,0,$area,1,1,(01.06.03.2486),$area,2,1,(00),$area,3,1,(01.06.09.2487),$area,4,1,(00),$@e';

console.log('괄호 포함:', extractWithParentheses(log));
console.log('내용만:', extractContentOnly(log));
