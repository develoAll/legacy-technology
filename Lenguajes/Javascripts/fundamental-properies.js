

var texto = "valor Algo del Mundo"
var edad = 13.5

// valores del codigo ASCII
const caracterCode = texto.charCodeAt(0);
console.log('charCodeAt',caracterCode);                        // --->  118

// trae el valor de la primera posicion de la variable
const caracter = texto.charAt(0);
console.log('charAt',caracter);                                // --->  v

// convierte en mayuscula o minusucla la variable
const mayuscula = texto.toUpperCase()
const minuscula = texto.toLowerCase()
console.log('chatoUpperCaserAt',mayuscula);                    // ---> VALOR ALGO DEL MUNDO
console.log('toLowerCase',minuscula);                          // ---> valor algo del mundo

// sirve para encontrar la primera posicion "Mundo" en la 
// variable, si no se encuentra devuelve -1
const posicionMundo = texto.indexOf("Mundo")
console.log('indexOf',posicionMundo);                          // ---> 15

// sirve para encontrar la ultima posicion "Mundo" en la 
// variable, si no se encuentra devuelve -1
const posicionO = texto.lastIndexOf("o")
console.log('lastIndexOf',posicionO);                          // ---> 19

// devulve la cantidad de caracteres 
const cantidad = texto.length
console.log('length',cantidad);                                // ---> 20

// convierte a la cantidad de decimales especificadas
const edadRedondeado = edad.toFixed(2)
console.log('toFixed',edadRedondeado);                         // ---> 13.50