const pokemon = ["피카츄", "라이츄", "파이리", "꼬부기"];

function virtualRouter(string) {
  switch (string) {
    case "피카츄":
      return {
        statusCode: 200,
        writeName: "피카츄",
        endName: "전기",
      };
      break;
    case "피카츄":
      return {
        statusCode: 200,
        writeName: "피카츄",
        endName: "전기",
      };
      break;
    case "라이츄":
      return {
        statusCode: 200,
        writeName: "라이츄",
        endName: "전기",
      };
      break;
    case "파이리":
      return {
        statusCode: 200,
        writeName: "파이리",
        endName: "불",
      };
      break;
    case "꼬부기":
      return {
        statusCode: 200,
        writeName: "꼬부기",
        endName: "물",
      };
      break;
    default:
      return {
        statusCode: 404,
        writeName: "야도란",
        endName: "에스퍼",
      };
      break;
  }
}

pokemon.forEach((urlElement) => {
  virtualRouter(urlElement);
});

// 본 예제에서 소개하는 switch문은 사실 자바스크립트 기본 작성법 중에 하나입니다. 여러 기술서에서 if()문과 나란히 "조건문"의 카테고리로 묶어 분기개념을 소개하곤 합니다. 많은 입문서에서 switch문에 대해 이해하는 수단으로서 계산기를 만드는 용도로 자주 언급하곤 합니다. "다양한 경우의 수"를 체계적으로 관리하기에 적절하기 때문입니다. 기능상으로 if, else if, else문법과 다르지 않지만, 코드도 엄연히 '언어(language)' 이기 때문에 if는 어조, 뉘앙스가 switch와 다릅니다.

// if()는 말그대로 "만약" 이기때문에, 원하는 만큼만 조건으로 제어하고자 하는 느낌이라면, switch의 경우는 모든 조건을 범주에서 다루겠다는 느낌이 강합니다.
// else if 조건이 많을 수록 가독성이 상당히 떨어지는 반면, case문법은 마치 promise 처럼 규격화 되어있는 모양새라 조건을 읽는 것이 else if보다 가독성이 상당히 좋습니다. 지극히 주관이 섞인 설명이긴 하지만, 너저분한 것을 천성적으로 싫어하는 개발자들이 조건문을 두개나 유지하는 보편적인 이유를 점쳐보면, 관점이 크게 다르지 않을 것입니다.

// 특징적으로 마치 교통로처럼 라우터기능을 담당하는 알고리즘에서 상당히 자주 활용하는 것을 자주발견 할 수 있습니다. 중요한 중계기이기 때문에, 캡슐화도 안하는 사례도 자주 발견합니다. 바로 writeHead(), statusCode, 200 응답헤더, 404 응답헤더와 같이 변할 여지가 없는 규약, 즉 프로토콜에 제격입니다.
// 개발자 마음대로 바꾸어 사용하면 비표준에 해당하기 때문에 지양하여 다른사례는 사실상 찾기 어렵습니다. "이런 경우엔~ 이렇게" 라는 부분으로 하나하나 놓아 헤아릴 때, switch구문만 보아도 '무언가 깔끔하게 조건을 제어하려고하는 구나' 하는 의도를 엿볼 수 있습니다.

// 본 예제는 제법긴편이지만, 반복된 case 작성으로 실질적인 핵심은 짧은 편이니, 서버응답패턴에 적용해보는 등 리펙토링 작업에서 switch문을 사용하여 그럴싸한 라우터를 만들어보시기 바랍니다. 다른 언어에서도 상당히 자주사용하는 패턴이니, 꽤 자주 만나게 될 사례입니다. 다양한 분기방법에 대한 어휘 하나를 늘려 언어사용의 숙련도를 쌓으시기 바랍니다.
