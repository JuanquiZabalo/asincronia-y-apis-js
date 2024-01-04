/**Realiza una llamada a una API con fetch() y, después de recibir 
 * los datos, encadena Promises para realizar varias operaciones 
 * de manipulación de datos, como filtrar, mapear o reducir los 
 * resultados. */

// funcion fetch --> para llamada a la API y obtener datos de esta
// Las respuestas de las API son promesas por lo que se puede usar .then

fetch('https://jsonplaceholder.typicode.com/posts')
    // siempre que se consulte a una API la respuesta es un objeto
    // json por lo que antes hay que tratarlo con el metodo .json()
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        return data.map((post)=>{
            return post.title.toUpperCase()
        })
    })
    .then((titles)=>{
        console.log("Titulos en mayusculas", titles)
    })
    .catch((error)=>{
        console.error('Error', error)
    })
