// Escribe tu código aquí:
/*Escribe una función que utilice un callback para imprimir 
"Hola, mundo" después de 2 segundos de ejecución. */

function imprimirHolaMundoCallback(callback){
    setTimeout(function(){
        callback()
    }, 2000)
}

imprimirHolaMundoCallback(function(){
    console.log('Hola World')
})

imprimirHolaMundoCallback(()=>{
    console.log('Hola World =>')
})