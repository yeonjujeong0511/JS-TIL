const nameArray = ["피카츄","라이츄","파이리","꼬부기","버터풀"];
// nameArray 변수에 배열 할당
const tagMake = (tagName, textNode) => `<${tagName}>${textNode}</${tagName}>`
// tagMake 변수에 함수를 선언해서 할당
const ulWrap = tagMake('ul',nameArray.map((value)=>tagMake('li',value)).join(''));
// ulWrap 변수에 함수호출값을 할당
// 함수 호출 결과 매개변수 tagName에 ul이라는 인수를 할당,
// name
console.log(ulWrap);
// <ul><li>피카츄</li><li>라이츄</li><li>파이리</li><li>꼬부기</li><li>버터풀</li></ul>
