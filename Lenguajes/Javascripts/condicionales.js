

let valor = "lega"

// si se cumple la condicion se ejecuta lo que esta dentro del if
if (valor === 'legacy') {  // en condicional siempore se usado doble o triple '=' para comparacion
  console.log('Hola mundo');
} else if(valor === 'lega'){
  console.log('Hola mundo2');
} else {  // si no se cumple lo del if, esecuta lo que esta en el else
  console.log('entro al otro');
}


// TERNARY OPERATOR
var simbolo = 1
// si es que lo que esta dentro del parentesis se cumple, retorna "almuerzo" sino "cena"
var tipo = ( simbolo == 2 ) ? "almuerzo" : "cena";
console.log(tipo);


var leyenda = "olo"
switch (leyenda) {
  case "ola":
    // en caso leyenda valga 1, se ejecuta lo que esta dentro
    console.log("primero");
    break;
  case "olo":
    console.log("segundo");
    // en caso leyenda valga 2, se ejecuta lo que esta dentro
    break;
  case "olu":
    console.log("segundo");
    // en caso leyenda valga 2, se ejecuta lo que esta dentro
    break;
  default:
    // si no se cumple ninguno de los de arriba, se ejecuta lo de aca
    break; // sirve para salir del bucle 
}