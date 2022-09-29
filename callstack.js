const func1 = () => {
  console.log('1');
  func2();
  console.log('4');
};
const func2 = () => {
  console.log('2');
  func3();
};
const func3 = () => {
  console.log('3');
};
func1();

// 1 2 3 4

// func1함수 실행 -> 콘솔에 1 출력 -> func2함수 실행 -> 콘솔에 2 출력
// -> func3함수 실행 -> 콘솔에 3 출력 -> func3함수 종료
// -> fun3함수를 불러왔던 func2로 돌아가기 다른 코드 없음 --> func2 함수 종료
// -> func2 함수 불러왔던 func1 함수 돌아가기 -> 콘솔에 4 출력
// -> 더이상 코드 없음 함수 func1 종료

