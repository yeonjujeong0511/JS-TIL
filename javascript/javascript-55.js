const objectExample = {
  first: "first property",
  second: "second property",
  third: function () {
    // ? third 라는 함수는 key일 뿐이므로 해당 메서드는 "익명함수"이다.
    console.log("this is 'third' method");
    return "this is third method return string";
  },
};

console.log("console one: ", Object.keys(objectExample).length); //3

// * Object.getOwnPropertyNames() : 객체의 key값을 배열에 담아서 보여준다.
// this vs that ?
console.log("console two: ", Object.getOwnPropertyNames(objectExample)); // [ 'first', 'second', 'third' ]

console.log("console three: ", Object.keys(objectExample));
// [ 'first', 'second', 'third' ]

console.log("console four: ", Object.keys(objectExample).toString()); // first,second,third

// ! 생성자 함수가 '규격'을 갖추는 여러기능으로 소프트웨어의 안정성을 도모했다면, '다룰 때'도 그에 준하는 강력한 기능들이 존재합니다. 배열 메서드보다 더욱 강력한 기능들을 지원합니다. 파이썬이 클래스 기반으로 만들어진 언어라한다면, 자바스크립트는 프로토타입기반으로 만들어져 있습니다. 프로토타입은 매우 주요한 객체 메서드 중 하나라 칭할 수 있겠습니다.(방법 보다는 구조에 가깝지만)
// ! 따라서 배열의 상위호환 수준의 강력한 메서드를 갖추었습니다. 개발자가 직접 제작하는 메서드와 함께 사용하는 것이 고차원적인 프로그래밍 언어사용으로 발돋움하는 차원이 됩니다.

// ! 본 예제에서는 그중 핵심이 될 주요 메서드인 .keys()를 예로 듭니다. 객체로 갖추어진 키의 이름을 '배열' 로 리턴하는 모습을 확인 할 수 있습니다. 따라서 for in문, for of문 더 나아가 배열 메서드까지 내포하여 활용할 수 있는 범용성을 품게 됩니다. 규격을 갖추느라 까다롭게 데이터타입을 다루는 생성자 함수, 그리고 그로부터 생산해낸 인스턴스들을 자유롭게 사용할 수 있는 내장객체 메서드들의 가진 유연함까지 도달할 것을 기대합니다. 아래의 공식문서를 확인해보면서 개발작업에 유용할만한 기능들을 살펴보시기 바랍니다.
