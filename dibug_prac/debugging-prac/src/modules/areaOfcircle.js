import calculrator from '../calculrator.js';

// 원의 넓이 구하는 공식
// 반지름 x 반지름 x PI
// math.PI -> 파이값
// math.cell -> 올림
const areaOfcircle = (radius) => {
  let radiusvalue = calculrator.multiplication(radius, radius);
  let result = calculrator.multiplication(radiusvalue, Math.PI);
  return Math.ceil(result);
};

export default areaOfcircle;
