// Escribe tu código aquí:
/**Crea tres Promises que se resuelvan después de diferentes 
 * intervalos de tiempo y luego utilice Promise.all() para mostrar un 
 * mensaje cuando todas se hayan resuelto. */

const promise1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve(1)
    }, 1000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve(2)
    }, 2000)
})

const promise3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(3)
    }, 1500)
})

Promise.all([promise1, promise2, promise3]).then((resultado)=>{
    console.log('Todas las promesas se han resuelto', resultado)
})
