// Usando un bucle for escribir un script que pida un valor 
// entero y muestre en pantalla una lista de números desde el 0 
// al valor tecleado. Los números se separarán por comas.  

let numero = ''
let array = []

do {
  array = []
  numero = prompt('Digite un numero')
  for (let index = 0; index <= numero; index++) {
    array.push(index)
  }
} while (isNaN(numero) || numero == ''); // mientras no sea numero

console.log(array.join(', '));