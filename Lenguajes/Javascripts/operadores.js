// el spreat operator te ayuda a desintegrar un array o conjunto de algo
let numerosLes = [1,2,3,4,5]
// console.log(...numerosLes);

// parametro Rest
function sumar(a,b,...c){
  let resultado = a + b

  c.forEach(element => {
    resultado = resultado + element
  });
  
  return resultado
}

const conjunto = sumar(4,3,2,1,3,1,2,3,2,3,23,3,1)
console.log(conjunto);