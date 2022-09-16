let example = [1,2,3,4,5,7,8,9];
// example 변수에 배열 할당
function indexOfPolyfill(arr,target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) {
      return i;
    } // 반복문의 if문이 참이라면 i를 리턴하고 함수 종료
  }
  return -1;
  // 반복문의 if문이 false라면 -1을 리턴
}
console.log(indexOfPolyfill(example,6)); // -1
console.log(indexOfPolyfill(example,5)); // 4
