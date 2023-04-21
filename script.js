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

// const object = {
//   height: 10,
//   inc() {
//     console.log(++this.height);
//     return this;
//   },
// };
// console.log(object.inc().inc());

// fourth

/*
Создать объект “вычислитель”, у которого есть числовое свойство

“значение” и методы “удвоить”, “прибавить один”, “отнять один”.

Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}
numerator.double().plusOne().plusOne().minusOne();

numerator.value // 3
*/

// const numerator = {
//   value: 1,
//   double: function () {
//     this.value *= 2;
//     return this;
//   },
//   plusOne: function () {
//     ++this.value;
//     return this;
//   },
//   minusOne: function () {
//     --this.value;
//     return this;
//   },
// };
// numerator.double().plusOne().plusOne().minusOne();

// console.log(numerator.value);

// five
/*
Создать объект с розничной ценой и количеством продуктов.

Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
*/

function getAllPrice() {
  return this.price * this.allProducts;
}
const products = {
  price: 100,
  allProducts: 50,
  getAllPrice,
};
// six
/*
Создать объект из предыдущей задачи. Создать второй объект, 
который описывает количество деталей и цену за одну деталь.
Для второго объекта нужно узнать общую стоимость всех деталей,
но нельзя создавать новые функции и методы.

Для этого “позаимствуйте” метод из предыдущего объекта.
*/
const details = {
  price: 10,
  allProducts: 5,
};
console.log(products.getAllPrice.call(details));
