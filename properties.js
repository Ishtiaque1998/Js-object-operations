const shoppingCart={
 books:3,
 sunGlass:6,
 keyboard: 5,

}


var num=shoppingCart.books;
console.log(num);

var penCount=shoppingCart['keyboard'];
console.log(penCount)

var properties=Object.keys(shoppingCart);
var propertyValues=Object.values(shoppingCart)
// console.log(shoppingCart)
console.log(properties)
console.log(propertyValues);

var propertyName='keyboard';
var propertyValue= shoppingCart[propertyName];
console.log(propertyValue)


shoppingCart.keyboard=90;
shoppingCart['keyboard']=80;
console.log(shoppingCart);

const products={
 name:'iphone',
 price: 89000,
 model: '11 pro',
 availability:'india'

}

// console.log(products)
// console.log(products.price);
// console.log(products['model']);
// console.log(Object.keys(products))

products.model='12 pro';
// console.log(products)
products['model']='90pro';
// console.log(products);
var productPrice=9000000;
products.price=productPrice;
console.log(products)





