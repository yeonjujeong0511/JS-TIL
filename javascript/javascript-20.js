let globalData = "hello"
// 변수 globalData에 hello를 할당

function example(){
  console.log(globalData);
  let localData = "bye";
  console.log(localData);
}
// 함수 example 선언, 콘솔에 gobalDate출력 
// let localData에 "bye"를 할당
// 콘솔에 localData도 출력
console.log(example()) // hello bye

//console.log(localData); //error
