// data and algorithm
const _PORT = {
  portList: {
    5000: "live server",
    3001: "react",
    3001: "react-native",
    3003: "vue",
    3005: "electron",
    3006: "Database",
  },
  localHostString: "http://127.0.0.1/",
  localHostURLPortStringReturnArray: function () {
    console.log(this);
    let tempArray = [];
    for (let portNumberString in this.portList) {
      let makeURL = this.localHostString + ":" + portNumberString;
      tempArray.push(makeURL);
    }
    return tempArray;
  },
};

const needObject = {
  needArray: _PORT.localHostURLPortStringReturnArray(),
  needResponseHeader: 200,
  isOn: true,
};

// 본 예제는 리팩토링 작업에서 흔히 마주치게 되는 패턴입니다. 확인해보면, 코드는 다소 긴 편이지만, 객체 두개로 이루어진 것을 확인 할 수 있습니다. 아래의 객체리터럴 needObject는 특정 기능을 하기위해 함수의 매개변수 용도로 사용되어야 하는 '조건'입니다. 조건이라, 개발자가 마음대로 바꾸어 사용하기 어렵습니다. 심지어 조건객체에 해당하는 속성 하나하나는 '원하는 데이터타입' 이 따로 지정되어 있습니다.
// ※ 조건과 같은 부분들은 맥락만 이해 해보는 정도로, 사용할 때 API DOC을 활용해 조건을 필요할때만 확인 하는 것을 권장합니다.

// 핵심은 위의 첫줄에 작성된 _PORT라는 객체리터럴 입니다. 가정한 요구사항(실제 훈련생의 작성중인 코드)은 다음과 같습니다.

// 1. 서버의 포트를 각 용도마다 다르게 지정하여 핸들링
// 2. 포트번호가 바뀔 수 있음
// 3. 필요한 포트의 갯수가 달라질 수 있음
// 4. 조건에 필요한 타입은 배열

// 값이 여러개가 있을 수 있다는 점과, 문자열 편집이 필요한점을 고려해 객체를 별도로 구성하여 관리하고, 필요한 경우 기능을 한데 묶어 사용하는 것으로 결정하였는데, 이에 대한 표현'방식'은 다를 수 있으나 '접근'은 중요합니다. 개발자로서 '값을 묶는' 관리하는 것에 객체가 편하겠다는 '판단' 이 이루어졌습니다. 이러한 관점은 작성법을 익힌 단계에서 한단계 더 나아가 '어휘'에 대한 논조라 할 수 있습니다.

//  하위 객체에 리터럴이긴하지만, 일단 필요한 데이터를 정리하였고, 공통되게 사용할 속성과 일련의 기능으로 사용될 메서드를 구축하였습니다. '객체' 이기때문에 데이터량이 얼마든, 모듈화 시킬 수도 있을 것입니다. 더 나아가 포트번호도 직접작성하는 것이 아닌 DB에서 연결하여 대입해줄 수 도 있을 것입니다. 마치 방을 아무리 청소해도 계속 할 수 있는 것처럼, 필요한 것이 있거나 정리감 있게 나누어야 하는 상황에서 정기적으로 코드를 정리하는 작업이 유지보수에서 필요한 레거시코드를 걷어내는 중요한 작업일과 중 하나입니다. 마치 소설가가 퇴고하는 것과 닮아서 하면 할수록 완성도가 높아집니다.

// _PORT 객체는 그 자체로 '데이터' + '기능'이 한데 묶여있으므로, 추상화에 익숙한(한가지의 상징으로 이해하려고 하는) 사람에게는 더할나위없이 머리를 맑게 해주는 효과를 기대할 수 있습니다.

// 메서드 자체에도 복잡한 문자열 템플릿(``)을 사용하지 않고 + 덧셈 방식으로 추후에 다시 확인하기 좋게 처리하였습니다.(취향이 갈립니다.)
// 이런방식을 여러번 해야한다면, 그 다음단계의 추상화는 바로 '생성자 함수'로, 이어지는점을 생각하는 것이 코드의 품질을 높이는 훈련 요소입니다. 특이한 점은 메서드의 이름이 지나치게 깁니다. 이것은 의도한 것으로 함수가 호출되는 순간 사람눈에는 여전히 함수처럼 보이지만, 사실 return에 의해 배열이 형태가 됩니다. 함수자체의 직관성은 매우 떨어지지만, 마치 주석처럼 해당 함수가 무엇을 리턴하는지 어떤 용도인지 목적이 무엇인지까지 작성했으므로 '설명'의 역할을 수행합니다. 다른 곳에 호출할 일이 그다지 많지 않을 것을 고려한 사례입니다.

// 유지보수성을 고려한 코딩 어휘를 확인하시고, 더불어 객체의 강력한 추상화(abstraction)기능을 차근차근 도입해 보시기 바랍니다.
