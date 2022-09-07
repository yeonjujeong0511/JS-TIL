function adultChecker($age) {
  // adultCheccker라는 함수 선언
  // age라는 매개변수 하나 가짐
  // $ : 개발자들의 약속 - 값을 바꾸지 않겠다.
	if($age > 19 ) {
    // 만약 age값이 19 이상이면(true)
    console.log('당신은 성인입니다.');
    // 콘솔에 '당신은 성입입니다.를 출력
  } else {
    // 만약 age값이 19미만이면(false)
    console.log('당신은 아직 성인이 아닙니다.');
    // 콘솔에 '당신은 아직 성인이 아닙니다.'를 출력
  }
}

adultChecker(20)

//adultChecker함수 호출 