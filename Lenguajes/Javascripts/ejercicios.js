// Usando un bucle for escribir un script que pida un valor 
// entero y muestre en pantalla una lista de números desde el 0 
// al valor tecleado. Los números se separarán por comas.  

let numero = ''
let array = []

// do {
//   array = []
//   numero = prompt('Digite un numero')
//   for (let index = 0; index <= numero; index++) {
//     array.push(index)
//   }
// } while (isNaN(numero) || numero == '');

// console.log(array.join(', '));

// codigo no tocar 

const select = document.getElementById('miSelect');
const btnSeleccionar = document.getElementById('btnSeleccionar');
const resultado = document.getElementById('resultado');

// let paises = ["peru","colombia","argentina","paraguay","uruguay"]
// let opciones = paises.filter( element => {
//   return element.length > 5
// })

let data = [
  {
      id: 2,
      descriptionParameter: "Anual",
      value: "4",
  },
  {
      id: 5,
      descriptionParameter: "Mensual",
      value: "1",
  },
  {
      id: 7,
      descriptionParameter: "Semestral",
      value: "3",
  },
  {
      id: 6,
      descriptionParameter: "Trimestral",
      value: "2",
  }
]

let opciones = data.map(ele =>{
  return ele.descriptionParameter
})

// no tocar
opciones.forEach(function(valor, indice) {
  const opcion = document.createElement('option');
  // opcion.value = ``; 
  opcion.value = indice
  opcion.text = valor; 
  select.appendChild(opcion);
});
btnSeleccionar.addEventListener('click', function() {
  const opcionSeleccionada = select.value;
  resultado.textContent = `Opción seleccionada: ${opcionSeleccionada}`;
});
