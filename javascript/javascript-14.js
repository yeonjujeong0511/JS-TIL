let globalVariable = 3;
// globalVariable 변수에 3을 할당
function exampleFunction ( parameterOne, parameterTwo ) {
    //exampleFunction 함수 선언
	let localVariable = parameterOne + parameterTwo + globalVariable ;
    //  localVariable변수에 매개변수 + 매개변수 + 전역변수 값을 할당
    return localVariable;
    // 함수를 호출하면 localVariable을 출력
    }
//console.log(localVariable) // eroor
console.log(exampleFunction(1,2)) // 6