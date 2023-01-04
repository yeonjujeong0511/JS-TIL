class BasicStudentInfo {
  constructor(studentName, phoneNumber, subNumber, email, cityName) {
    this.studentName = studentName;
    this.phoneNumber = phoneNumber;
    this.studentName = subNumber;
    this.email = email;
    this.cityName = cityName;
  }
  get cityName() {
    return this._cityName;
  }
  set cityName(value) {
    if (typeof value === "string") {
      this._cityName = value;
    } else {
      console.log("데이터타입이 string아닌 관계로 강제로 바꾸었습니다.");
      this._cityName = String(value);
    }
  }
}

const yeonju = new BasicStudentInfo(
  "정연주",
  "010-3375-0273",
  "042-673-0273",
  "yenju0511@gmail.com",
  1234
);
console.log("단순객체 조회");
console.log(yeonju);
console.log("인스턴스 구조 조회");
console.dir(yeonju);
console.log("setter로 정제(refine)된 데이터 조회");
console.log(typeof yeonju.cityName);
console.log(typeof yeonju._cityName);
console.log(yeonju.cityName === yeonju._cityName); // 놀랍게도 textUnderlinePosition:

// 여기까지 확인이 되었다면, 생성자 함수의 get부분을 잠시 주석처리하고 다시 확인
// undefined 뜨고, 마지막은 false가 된다.

/**
 * *생성자 함수는 인스턴스라는 객체를 만들어주는 것 이상의 기능을 품을 수 있습니다. OOP 즉 객체지향프로그래밍에서 빼놓을 수 없는 메서드(방법)와 정적인 속성, 함수를 통한 인스턴스 생성 여러가지 기능들이 상당히 강력하게 차려져있어, 웹 브라우저 조차 생성자함수의 꾸러미라고 해도 과언이 아닙니다.
 * *해당 예제를 따라 작성해보고 하나씩 검사해보며 어떤 값이 도출되는지 실습하여, 큰 데이터를 다루기 위한 준비를 진행하도록 하겠습니다.
 */
