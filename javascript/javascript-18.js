let textArray = ["피카츄","라이츄","파이리","꼬부기","버터풀","야도란","피죤투","또가스"];
// 변수에 배열을 할당

function one(arr){
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
    }
  }
}
// one이라는 함수를 선언
// arr위 데이터 타입이 문자열 이거나, 인자가 배열이거나, 둘 중 하나만 만족해서 함수 실행
// Array.isArray 메서드로 인자가 배열인지 판별
// 반복문 실행 후, 콘솔에 출력

one(textArray);

// * 함수 one() 
// * 간단하게 호출해서 사용


const two = function(arr){
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i <arr.length; i++){
      console.log(arr[i]);
    }
  }  
}
// 변수 two에 함수를 할당
// 위에 함수와 같다.

two(textArray);
// * 변수 two
// * 위와 같지만 이름이 없는 익명함수다.
// * 변수 two가 함수를 '식별'해주어 이름 역할을 대신