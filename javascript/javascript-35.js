let count = 0;
// count 변수에 0 할당
function interval(countInt,intervalTime,limitInt){
  //interval 함수 선언
  setTimeout(function(){
    // setTimeout 실행
    countInt++;
    // 실행되면 countInt이 1씩 증가
    console.log(countInt);
    // 콘솔에 countInt 출력
    if(countInt < limitInt){
      interval(countInt,intervalTime,limitInt);
      // limitInt의 매개변수값보다 countInt의 값이 작다면,
      // interval함수 실행
    }
  },intervalTime);
  // intervalTime초마다
}
// * setTimeout()은 주어진 시간만큼 기다렸다가 한번 실행한다.
// * 1 번 행동 : 매개변수 countInt를 1 증가 시킨다.
// * 2 번 행동 : 콘솔에 증가된 countInt 값을 출력한다.
// * 3 번 행동 : 조건식이 참(ture)라면 영역내의 행동을 실행한다.
// * 3-1 번 행동 : interval()이라는 함수를 실행한다.
// * interval()은 본인 자신이다.
// * 함수 자신이 자신을 호출하는 행위를 '재귀함수(recursion funciton)'이라고 부른다.

interval(count,1000,10);
// 콘솔에 1초마다 1부터 10까지 1초마다 출력

// * setTimeout()을 응용한 것이 setInterval()이다.

// 확인