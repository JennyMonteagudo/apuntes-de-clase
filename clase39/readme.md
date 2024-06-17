## Async/Await (uso para proyecto final o proyectos propios)

la desventaja de la promesa es que se vuelven dificiles de entender cuando se anidan. Por eso se han creado las funciones `async` y 

```js
//con la palabra azync, decimos que esta funcion va a ser asincrona
let listaUsuarios;


async function traerDatos(){
    try{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos = await response.json(); //convierte misdatosa JSON

    console.log(datos);
    console.log(datos[0].name);
    }catch (error) {
        console.error("tuve un error:", error);
    }
}

listaUsuarios=traerDatos();
```

##Ejemplo del restaurante

```js
let plato= "Ensalada";
console.log("Paso 1: Solicitar a un camarero elplato ", plato);

console.log("Paso 2: el camarero va a buscar el plato de comida ");
buscarPlato();

async function buscarPlato(){
    try{
        const response =await fetch ("http://restaurante.com/api/traerPlato");
        const datosJs = await responseJson.json();

        console.log("Paso 4: el camarero lleva el plato de :", datosJs.plato);
        console.log("Paso 5: el comensal se come su comida");

    }catch (error) {
        console.log("Mi error fue: ", error);
    }
}
```

Ejercicio Obtener los 10 usuarios de jsonPlaceholder, y mostrarlos en pantalla.