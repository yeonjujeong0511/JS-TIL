class Test {
  constructor(one, two) {
    this.one = one;
    this.two = two;
  }
}

let instanceTest = new Test(7, 8);
Test.prototype.makeString = function () {
  return this.one + " " + this.two;
};
console.log(instanceTest.makeString());

// 개발 볼륨을 키우면 키울수록 '값의 묶음' 형태인 객체에 의존하게 됩니다. 데이터를 저장할 때 일련의 규격(프로시저, procedure)으로서, 유지보수 관리 패턴으로서, 관계를 정의하는 규칙으로서 객체는 상당히 고도로 활용되어지고 있습니다. 이러한 방식을 객체지향 프로그래밍 패러다임이라고 부르며, 객체의 규격화와 다각적 변형(개발분야에서는 다형성이라고 부릅니다)에 상당한 발전과 기능을 제공합니다. JAVA 언어가 대표적인 객체지향프로그래밍으로 매우 안정적인 데이터 처리 능력을 언어차원에서 지원하고 여기에서도 동일하게 본 예제의 개념이 들어와있습니다.(자바스크립트가 차용했습니다)
// 따라서 생성자 함수에 대한 이해에 대해 직접적으로 상당한 노력을 기울여야 하는데, 생성자 함수를 다양하게 확장(extend)하는 방식이 존재하는가 하면 본 예제처럼 동적으로 메서드를 만들어 할당하기도 합니다.

// 멀리있는 개념은 아닌 것이 자바스크립트 내장객체(첫글자가 class 처럼 파스칼케이스로 되어있습니다)인 String객체와 Array객체는 순서(index)가 동일하게 있다는 점 때문에 하나의 함수(메서드)를 공용으로 사용합니다. 이때 등장하는 개념이 바로 프로토타입, prototype 체이닝 문법입니다. 짜임새있는 코드는 중복이 최소화 된다는 점을 생각할 때, 프로토타입 문법은 상당히 매력적인 기능입니다. 자바스크립트 자체가 프로토타입기반으로 작성되었다고 봐도 이상할게 없을만큼, 상당한 내장기능에서 프로토타입으로 '묶여(물려)' 있습니다.

// 리팩토링과 다형성(polymorphism)의 주요 개념 중 하나이므로, 새롭게 소개하는 prototype 문법은 메서드와 getter, setter를 자유롭게 사용 할 수 있게 될 때, 고려하여 활용하는 것을 권장합니다.
