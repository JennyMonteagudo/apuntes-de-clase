# Math

El objeto `Math` nos proporciona propiedades y metodos para realizar operaciones. Los mas comunes son:

- Math.random(): nos devuelve un numero pseudo-aleatorio entre 0 y 1.
- Math.round(): duvuelve el redondeo de un numero al entero mas cercano.
- Math.ceil(): redonde para arriba.
- Math.floor(): redondea para abajo. 
- Math.abs(): Devulve el numero absoluto. es el positivo siempre de un numero. 

```js
let numero= 3.1416;

let numeroRedondeadoEntero= Math.round(numero); //3
let numeroRedondeadoParaArriba= Math.ceil(numero); //4

// Redondear mi numero a dos digitos
let numeroDeDosDigitos= Math.round(numero*100)/100; //4
```

## Interpolacion de variables (Template Strings)

Es una forma de concatenar strings y variables de forma legible. Se utiliza el "acento abierto" (backtick) para terminar el string y $ {} para insertar la variable. 

Entre los beneficios tenemos:

- Lectura mas sencilla.
- Uso de variables en nuestro strig.
- Posibilidad de escribir multiples lineas de texto.
- realizar operaciones  dentro de {} en string.

```js

//metodo tradicional
let nombre= "Juan";
let edad=30;
let contenido = `<div class='caja'> 
                <h1>Hola a todos, mi nombre es" ${nombre} </h1>
                </div>`;
let mensaje = `Hola, me llamo ${nombre} y voy a cumplir ${edad+1} a;os`;

```