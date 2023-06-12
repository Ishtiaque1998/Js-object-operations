// const products={
//  name:'iphone',
//  price: 89000,
//  model: '11 pro',
//  availability:'india',
//  pen:25,

// }
// const keys=Object.keys(products);
// // console.log(keys);
// const values=Object.values(products)
// // console.log(values);

// for (var i=0; i<keys.length;i++){
//  var names=keys[i];
//  // var propertyValues=values[i];
//  var propertyValues=products[names];
//  // console.log(names,propertyValues);
//  // console.log(propertyValues)
// }


// //for in loop
// for(var names in products ){
//  const values=products[names]
//  console.log(names,values)
// }


const products={
 name:'iphone',
 price: 89000,
 model: '11 pro',
 availability:'india',
 pen:25,

}

const keys=Object.keys(products);
// console.log(keys);
const values=Object.values(products);
// console.log(values)

for(var i=0; i<keys.length;i++){
 const items=keys[i];
 const itemValues= products[items];
 // console.log(items,itemValues);
}


for(var item in products  ){
 const infos= products[item];
 console.log(item,infos)
}