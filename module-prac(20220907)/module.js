// 함수 생성해놓은 것들을 모듈로 불러온다.

import createElement from './createElement.js'
import styling from './styling.js'

const root = document.getElementById('root');

// root의 자식요소로 div를 생성
root.innerHTML = createElement('div',"div생성")
let div = root.children[0]

// div를 불러온 함수로 스타일링
styling(div, "100px", "100px", "skyblue", "flex")


