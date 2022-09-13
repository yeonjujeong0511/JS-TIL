let a = "1";
console.log(typeof a); // string
// 변수 a는 "1"을 할당 
// 큰따옴표 안에 있으므로, 문자열

let b = parseInt(a);
console.log(typeof b); // number 
// parseInt() --> 문자열을 '정수'로 바꿔주는 함수
// 변수 b는 a라는 변수의 값을 정수로 바꿔준다.

let c = "안녕하지롱";
// 변수 c는 "안녕하지롱"을 할당
let d = parseInt(c); 
console.log(d);// NaN

// 변수 d는 c 변수의 값을 정수로 바꾼 값을 할당
// 그러나 결과값 NaN(Not a number)
// 변수 c의 문자열을 숫자로 바꿀 수 없는 데이터 타입
// NaN 대소문자구별이 특이하다 --> 에러가 발생하지 않아 난처한 경우라고 볼 수 있다.