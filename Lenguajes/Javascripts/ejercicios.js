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

let personas = [
  {
    pais: "Peru",
    extranjero: true,
    datos: {
      nombre: "alejandro",
      edad: 30
    }
  },
  {
    pais: "Peru",
    extranjero: true,
    datos: {
      nombre: "renzo",
      edad: 17
    }
  },
  {
    pais: "Peru",
    extranjero: false,
    datos: {
      nombre: "kevin",
      edad: 28
    }
  },
  {
    pais: "Peru",
    extranjero: true,
    datos: {
      nombre: "juan",
      edad: 22
    }
  },
  {
    pais: "Peru",
    extranjero: false,
    datos: {
      nombre: "gilbert",
      edad: 15
    }
  },
  {
    pais: "Peru",
    extranjero: true,
    datos: {
      nombre: "erick",
      edad: 21
    }
  },
  {
    pais: "Peru",
    extranjero: false,
    datos: {
      nombre: "pepe",
      edad: 15
    }
  }
]


let opciones = personas.filter( ele => {
  return ele.datos.edad > 17 && ele.extranjero == true
}).map(ul => {
  return ul.pais + " - " + ul.datos.nombre
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
