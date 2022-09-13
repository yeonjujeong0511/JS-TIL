let globalData = "hello"
// 변수 globalData에 hello를 할당

function example(){
  console.log(globalData);
  let localData = "bye";
  console.log(localData);
}
// 함수 example 선언, 콘솔에 
console.log(example())
//console.log(localData); //error