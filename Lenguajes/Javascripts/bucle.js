
var valor = ['alejandro', 'renzo', 'gonzalo', 'kevin']

// recorre varias hata que tu pongas la condicion 
for (let index = 0; index < valor.length ; index++) {
  console.log(valor[index]);
}

/* recorre todo tu array uno por uno, 
y le asigna una variable que reemplaza cada 
valor dentro del array*/
valor.forEach(element => {
  console.log(element);
});

/* primero se ejecuta lo que esta dentro {} y luego
realiza la condicion, si es verdadero sigue ejecutandose*/
do {
  condicion++
  console.log(condicion);
} while (condicion < 4);

/* primero realiza la condicion, si es verdadero sigue
 ejecutandose lo que esta dentro {}*/
while (condicion < 4) {
  console.log(condicion);
  condicion++
}