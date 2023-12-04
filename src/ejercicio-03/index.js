// Escribe tu código aquí:
/*Define una función asincrónica que espere 1 segundo y luego devuelva 
una cadena que diga "Operación completada". Utiliza async/await. */
// async delante de una function hace que la funcion devuelva una promesa
// await suspende la funcion y espera por el resultado de la promesa

async function operacionAsincrona(){
    const promesa = await new Promise((resuelta)=>{
        setTimeout(function(){
            resuelta('Operacion resuelta')
        }, 3000)
    })
    return promesa
}

async function ejecutarOperacion(){
    const resultado = await operacionAsincrona()
    console.log(resultado)
}

ejecutarOperacion()