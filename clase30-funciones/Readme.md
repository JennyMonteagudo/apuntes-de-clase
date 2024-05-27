## Funciones

```js
//funcion clasica
function miFuncion(param1, param2) {
    return valor;
}

//Funciones asignadas a variables
const miFuncion= function (param1, param2){
    return valor;
}

//Funcion Flecha // arrow function

const miFuncion = (param1, param2) =>{
    return valor;
}

const obj={
    color: "rojo",
    metodo1: () =>{

    }
}

//Funcion Flecha Simplificada. Si todo el codigo dentro es una sola linea se puede usar

const miFuncion = param => valor;

divEstadisticas.addEventListener//("lo que quiero escuchar" es lo que esta antes de la primera coma, "la funcion que voy a ejecutar cuando escuche lo que queria escuchar)=
//cuando hacemos click en div estadisticas, mostramos el mensaje en consola. 
//lo de () => {} es la version simplificadad e la funcion flecha.
divEstadisticas.addEventListener("click", ()=> {
    //funcion de Callback.
    console.log("estoy haciendo algo cuando me hicieron click");
})
```