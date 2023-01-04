// 안티패턴의 함수이긴 하나, 두개의 함수는 구조과 완전히 동일
// return의 + 결합자 문자열만 다르다.
function yahoFunc(parm) {
  if (typeof parm === "string") {
    return parm + "yaho";
  }
}

function merongFunc(parm) {
  if (typeof parm === "string") {
    return parm + "merong";
  }
}

// 가시적으로 보이게 만들어진 것이므로 결코 좋은 방식이 아님을 주의

function handMAde(test, callback) {
  if (typeof test === "string" && typeof callback === "function") {
    console.log(typeof test);
    console.log(typeof callback);
    // 위에 calback 이라는 매개변수 타입체크 방법을 눈여겨보면 함수호출의 방식인 () 소괄호를 별도를 붙여주지 않은 것을 확인
    //자바스크립트에서 소괄호가 없으면 호출(call) 하지 않았다는 표시이므로 주의
    console.log(callback(test));
    //test 라는 인자는 부모함수의 handMade 함수에서 받아온 인자
  }
}
handMAde("나는 이렇게 말하지 ", merongFunc);
handMAde("나는 이렇게 말하지 ", yahoFunc);

// 같은 함수를 두번 호출했는데, 매개변수로 사용된 함수는 다르다.
// 위에 함수는 콜백으로 만드는 의미가 전혀 없긴하지만, 명확하게 함수를 다시부르는 형태를 통해 실행되었다.callback

// merongFunc(), yahoFunc()는 독립적이지 않고, 자식처럼 handMAde 라는 함수의 '매개변수' 형태로 활용
// 즉, 콜백함수의 형태

// 콜백함수는 슬기롭게 사용하는 것이라면, 상당히 매력적인 실행제어를 조작할 수 있습니다. 통념적으로 콜백함수라는 '조건'을 받아서 사용해야 하는 경우가 많아서, 직접 만들어본다는 생각까지 닿기 어렵지만 충분히 만들어서 사용할 수 있는 구조입니다. 특히 함수형 프로그래밍에서는 빼놓을 수 없는 주요 개념이기도 합니다. 함수의 리턴은 불변하기 때문에, 역으로 콜백을 사용하기도 하는 구조도 존재합니다.

// 개발자가 가질 무기 중 몇 안되는 강력한 기능이 바로 함수의 형태를 가지고 실행을 제어하는 점을 떠올리면, 야금야금 언제든지 호출하고 변형할 수 있다면, 상당히 편하게 원하는 명령을 진행할 수 있게 될 것입니다. 본 예제에서는 가독성을 위해 의도적으로 중복코드를 작성해 두었는데, 최적화 하는 관점으로 본 예제의 함수를 변형하면서 구조를 파악해보시기 바랍니다.
