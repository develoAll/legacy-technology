
let frutas = [1, 2, 3, 4]

let funcionesN = frutas.map(function (element) {
  return element*5
})

let funcionesF = frutas.map((element) => element*5)

console.log(funcionesN);
console.log(funcionesF);

// let nuevo = frutas.filter(element =>{
//     return element % 2 == 0
//   }
// )

// let litro = frutas.find(element => {
//     return element % 2 == 0
//   }
// )

// codigo de prueba para crear selects


