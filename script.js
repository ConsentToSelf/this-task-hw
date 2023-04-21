// first

/*
Создать объект, который описывает ширину и высоту

прямоугольника, а также может посчитать площадь фигуры:

const rectangle = {width:..., height:..., getSquare:...};
*/

// function getSquare() {
//   console.log(this.width);
//   console.log(this.height);
//   console.log(this.width * this.height);
//   return this;
// }
// const rectangle = {
//   width: 10,
//   height: 10,
//   getSquare,
// };
// const getSquareVar = rectangle.getSquare();

// second

/*
Создать объект, у которого будет цена товара и его скидка, а также

два метода: для получения цены и для расчета цены с учетом скидки:

const price = {

price: 10,

discount: '15%',

... };

price.getPrice(); // 10

price.getPriceWithDiscount(); // 8.5
*/
// function getPrice() {
//   console.log(this.price);
// }
// function getPriceWithDiscount() {
//   const value = (this.price / 100) * parseInt(this.discount);
//   const getPriceDis = this.price - value;
//   console.log(getPriceDis);
// }
// const price = {
//   price: 10,
//   discount: "15%",
//   getPrice,
//   getPriceWithDiscount,
// };

// price.getPrice();
// price.getPriceWithDiscount();

// third

/*
Создать объект, у которого будет поле высота и метод “увеличить

высоту на один”. Метод должен возвращать новую высоту:

object.height = 10;

object.inc(); // придумать свое название для метода

object.height; // 11;
*/

const object = {
  height: 10,
  inc() {
    console.log(++this.height);
    return this;
  },
};
console.log(object.inc().inc());
