/**
 * 로그 문자열에서 괄호와 괄호 안의 텍스트를 모두 추출하는 함수
 * @param {string} logString - 분석할 로그 문자열
 * @returns {Array} 괄호와 괄호 안의 텍스트 배열
 */
function extractParenthesesContent(logString) {
  // 괄호와 괄호 안의 내용을 찾는 정규식
  const regex = /\([^)]*\)/g;

  // 매치되는 모든 결과를 배열로 반환
  const matches = logString.match(regex);

  return matches || [];
}

/**
 * 괄호 안의 내용만 추출하는 함수 (괄호 제외)
 * @param {string} logString - 분석할 로그 문자열
 * @returns {Array} 괄호 안의 텍스트만 포함한 배열
 */
function extractParenthesesContentOnly(logString) {
  // 괄호와 괄호 안의 내용을 찾는 정규식
  const regex = /\(([^)]*)\)/g;
  const results = [];
  let match;

  // 모든 매치를 찾아서 괄호 안의 내용만 추출
  while ((match = regex.exec(logString)) !== null) {
    results.push(match[1]);
  }

  return results;
}

// 테스트용 로그 데이터
const testLog =
  'log=@s045,$type,4,$c,0,000000,$bb,0,000442,$hbut,0,$rebut,0,$vol,0,0,$pbut,1,$put,0,$area,1,1,(01.06.03.2486),$area,2,1,(00),$area,3,1,(01.06.09.2487),$area,4,1,(00),$@e';

// 함수 테스트
console.log('원본 로그:');
console.log(testLog);
console.log('\n괄호 포함 추출 결과:');
console.log(extractParenthesesContent(testLog));
console.log('\n괄호 내용만 추출 결과:');
console.log(extractParenthesesContentOnly(testLog));

// 모듈로 내보내기 (Node.js 환경에서 사용할 경우)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    extractParenthesesContent,
    extractParenthesesContentOnly,
  };
}
