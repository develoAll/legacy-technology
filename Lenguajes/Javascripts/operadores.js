
// el spreat operator te ayuda a desintegrar un array o conjunto de algo
let numerosLes = [1,2,3,4,5]
let numerosRig = [...numerosLes]
console.log(numerosRig);


// parametro REST
function otro (a, b, ...c){
  let resultado = a + b

  c.forEach( function (a) {
    resultado = resultado + a
  })
  
  return resultado
}

const valor = otro(2,4,7,4,6,2)

console.log(valor);