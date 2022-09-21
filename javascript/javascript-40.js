class ParentObject {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

let parentObjectInstance = new ParentObject('1', '이상해씨', '대전');
console.log(parentObjectInstance);
// { id: '1', name: '이상해씨', city: '대전' }



class ChildObject extends ParentObject {
  constructor(type) {
    super('1', '이상해씨', '대전'); // * 부모 constuctor()데이터를 가져오는 특이한 함수
    // 값을 넣으면 id,name,city값 같이 가져올 수 있음
    this.type = type;
  }
}

let childObjectInstance = new ChildObject('풀');
console.log(childObjectInstance);
// { id: '1', name: '이상해씨', city: '대전', type: '풀' }
