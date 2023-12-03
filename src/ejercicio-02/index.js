// Escribe tu código aquí:
/*Crea una Promise que se resuelva después de 3 segundos y 
luego imprima "Promise resuelta" cuando se cumpla. */

// Promesas usadas siempre en consultas a apis o uso de funciones asincronas 
// Las promesas son funciones asincronas

/*Creando una promesa con su constructor Promise
esta recibe una funcion o callback que tiene dos parametros
que son funciones uno con el resultado resuelto de la promesa 
y el otro si hubo error en la promesa*/

/*Para utilizar la promesa se usa Promise.then() que toma dos argumentos, 
una devolución de llamada o callback para el éxito y otra 
para el fracaso. Se puede utilizar solo un callback para tratar
el caso de exito*/

const miPromesa = new Promise((resuelto, rechazado)=>{
    const x = 5
    if (x === 2){
        resuelto('Son iguales')
    }
    else{
        rechazado('No son iguales')
    }
});

miPromesa.then(
    function(resultado){console.log(resultado)},
    function(error){console.log(error)})

const miPromesa2 = new Promise((resuelto, rechazado)=>{
    setTimeout(()=>{
        resuelto('Promesa resuelta')
    }, 3000)
})

miPromesa2.then((resultado)=>{
    console.log(resultado)
})

