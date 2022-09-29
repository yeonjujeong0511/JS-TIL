console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3');
// 1 3 2


// 콘솔에 1 출력
// setTime함수 실행과 동시에 엔진으로 들어가서 대기한다.
// 0초 지만 그래도 무조건 엔진으로 들어간다.
// 엔진으로 들어간 그 찰나의 순간 console.log('3')이 실행
// 콘솔에 3 출력 
// 출력한 후에 setimeout함수안에 console.log('2')실행
