export default function createElement(tagName,textContent) {
      let element = [];
      let temp = `<${tagName}>${textContent}</${tagName}>`
      element.push(temp);
      return element.join('');
    }

// create Element 함수 생성

