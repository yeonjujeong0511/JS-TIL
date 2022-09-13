function minus(a, b){
    // minus 라는 함수를 선언
    if (typeof (a) === "number" && typeof (b) === "number" ){
         // 매개변수 a 와 b 의 데이터 타입이 숫자라면,
        if(a > b) {
            // a가 b보다 크다면, 
            return a-b;
            // a-b의 값을 출력
        } else {
            console.error("첫번째 인자가 두번째 인자보다 작습니다.")
            // 조건문이 false라면 콘솔에 에러메세지를 출력
        }
    }
}
function sum(firstNumber, secondNumber){
    // sum이라는 함수를 선언
    if(typeof (firstNumber) === "number" && typeof (secondNumber) === "number" ) {
        // 위와 같이 매개변수의 데이터타입이 숫자 일때만 함수실행,
        return firstNumber + secondNumber;
        // 첫번째와 두번째 매개변수를 더한 값을 출력
    }
}
console.log(sum(10, minus(20,5)));
// 함수 호출