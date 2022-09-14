let a = "나는";
let b = "날개";
let c = "달린";
let d = "호랑이";
let e = "다";
// 각가의 변수에 문자열을 할당
console.log('당신은 방금 ' + a + ' ' + b + c + ' ' + d + e +' 말씀 하였습니다. 정말 ' + d +'가 맞습니까?')
// * 위외 같이 변수가 많고, 또 '하나의 문장으로 만들기에' 너무 많은 덧셈을 활용하고 있어 가독성이 떨어진다.
// * 띄어쓰기도 지원하지 않기 때문에, 중간에 띄어써놓은 빈칸 문자열을 활용
// * 최신버전에서 아래 같은 작성 방식으로 해결

console.log(`당신은 방금 ${a} ${b}${c} ${d}${e} 말씀 하였습니다. 정말 ${d}가 맞습니까?`)
// * `` 백틱키로, 덧셈 기호 필요없이 한번에 문자열을 합칠 수 있다.
// * 백틱기호와 ${}변수를 삽입하는 방식을 '템플릿 문자열'방식이라고 한다.
