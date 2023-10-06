
var nombre = ['kevin','Issac','gonzalo','ale'];
    //          0     1     2       3     4       <------ Posiciones
var apellido = ['Velarde']

console.log(nombre);       
// metodo push, agrega al final del array y te
// devulve la cantidad de caracteres del nuevo array           
console.log('return push',nombre.push('jairo'));    
console.log('push',nombre);                                             // --->  ['kevin','Issac','gonzalo','ale','jairo']

// metodo pop, elimina el ultimo elemento del
// array y te devuelve el elemento eliminado
console.log('return pop',nombre.pop());            
console.log('pop',nombre);                                              // --->  ['kevin','Issac','gonzalo','ale']

// metodo shift, elimina el primer elemento del
// array y te devuelve el elemento eliminado            
console.log('return shift',nombre.shift());          
console.log('shift',nombre);                                            // --->  ['Issac','gonzalo','ale']

// metodo unshift, agrega al inicio del array y te 
// devuelve la cantidad de caracteres del nuevo array                
console.log('return unshift',nombre.unshift('Renzo')); 
console.log('unshift',nombre);                                          // --->  ['Renzo','Issac','gonzalo','ale']

// metodo concat, junta 2 arrays y te retorna 
// la suma pero no afecta a las variables                    
console.log('return concat', nombre.concat(apellido));
var completo = nombre.concat(apellido)
console.log('concat',completo);                                         // --->  ['Renzo','Issac','gonzalo','ale','Velarde']

/*metodo slice, devulve un nuevo array seleccionando
por un rango de elementos, el 1er parametro es la 
posicion donde comienza y el 2do donde termina sin
 considerar el mismo*/
console.log('return slice',completo.slice(1,3));                        // --->  ['Issac','gonzalo']

/*metodo slice, elimina elementos de un array y devulve los
elementos eliminados, selecciona un rango de elementos, el 
1er parametro es la posicion donde comienza y el 
2do donde termina considerando el mismo
*/
console.log('return splice',completo.splice(1,3));                      
console.log('splice',completo);                                         // --->  ['Issac','gonzalo','ale',]

