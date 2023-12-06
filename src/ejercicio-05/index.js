// Escribe tu código aquí:
/*Crea tres Promises consecutivas, donde cada una se resuelva 
después de 1 segundo y devuelva un número diferente. Luego, 
encadena las tres Promises para sumar los resultados y mostrar 
el resultado final.*/

function crearPromesa(valor, retraso){
    const promesa = new Promise(function(resuelta){
        setTimeout(()=>{
            resuelta(valor)
        }, retraso)
    })
    return promesa
}

let numero1
let numero2
let numero3

crearPromesa(1, 1000).then((resultado)=>{
    console.log(resultado)
    numero1 = resultado
    return crearPromesa(2, 1000)
})
.then((resultado2)=>{
    console.log(resultado2)
    numero2 = resultado2
    return crearPromesa(3, 1000)
})
.then((resultado3)=>{
    console.log(resultado3)
    numero3 = resultado3
    const suma = numero1 + numero2 + numero3
    console.log('Suma: ',suma)
})
