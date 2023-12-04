// Escribe tu código aquí:
/*Crea una Promise que se rechace después de 2 segundos y captura el 
error para imprimir "Error: Promise rechazada" */

const miPromesa = new Promise(function(resolve, reject){
    setTimeout(function(){reject('Promesa rechazada')})
}, 2000)

miPromesa.catch((error)=>{
    console.log('Error:',error)
})