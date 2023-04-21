// first

/*
Создать объект, который описывает ширину и высоту

прямоугольника, а также может посчитать площадь фигуры:

const rectangle = {width:..., height:..., getSquare:...};
*/

function getSquare() {
  console.log(this.width);
  console.log(this.height);
  console.log(this.width * this.height);
  return this;
}
const rectangle = {
  width: 10,
  height: 10,
  getSquare,
};
const getSquareVar = rectangle.getSquare();
console.log(getSquareVar);
