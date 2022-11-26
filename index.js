// function calVal (a,b) {
//   return [a+b,
//   a-b]
// }

// const result = calVal (42,10)// можно заменить на 12
// // const sum = result [0]
// // const sub = result [1]
// const [sm, sb]= result
// console.log('new string', sm, sb);

// const [s, b] = calVal (42,10)
// console.log('new', s, b);

function sum (a, b,...rest) {
return a + b + rest.reduce((acc, item)=> {
  return acc + item
}, 0)
}

console.log(sum(1,2,3))
console.log('other', sum(1,2,3,4));
console.log(sum(10, 15, 249, 653, 846)) 