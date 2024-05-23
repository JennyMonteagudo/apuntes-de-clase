## Funciones

Es un bloque de codigo o algoritmo que realiza una operacion especifica. puede recibir valores de entrada (parametros), y devolver un unico resultado. Los valores que se pasan a la funcion cuando se invoca, se les llama argumentos.

```js
/**
 * Funcion que saluda al usuario y le indica su nombre y edad.
 * @param {string} nombre= Nombre de usuario
 * @param {number} edad= la edad del usuario
 * 
 * @return {void} = no devuelve nada
 **/
function Saludar( nombre, edad, genero="no indicado" ){ //lo que esta dentro de los () son los parametros == es lo mismo que poner let nombre= o let edad= o let genero= por lo que lo que igualemos sera el valor por default si no se ingresa ese valor de argumento. El que tenga un valor siempre es preferible que vaya detras.

    //1. creo una variable
    let respuesta;
    // 2. actualizo la variable
    respuesta = "Hola a todos, mi nombre es " + nombre + "y mi edad es" + edad;
    //3.devuelvo una variable actualizada
    return respuesta; 
    
}
let mensaje;

//llamar a la funcion multiples veces
mensaje = Saludar( "Juan", 18); //lo que esta dentro de los () son los argumentos
console.log(mensaje);
alert(mensaje);
mensaje = Saludar( "Pepe", 43); //Pepe y 43
```

## Condicionales

Son estructuras de control que nos permiten tomar decisiones. Si se cumple se ejecuta un bloque de codigo y si no se cumple se ejecuta otro codigo.

- El uso de "else" es opcional
- se pueden anidar condicionales.

```js
let numero = 7;

/**
 * Si el modulo de 2 de un numero es PAR o IMPAR
 */
if(numero %2 == 0) {
    //si el numero es par hace todo lo que este dentro de la llame en este caso imprimir en la consola
    console.log("El numero es PAR")
}
else(){
    console.log("El numero es IMPAR")
}

```
```js
let edad = 16;

/**
 * Si el modulo de 2 de un numero es PAR o IMPAR
 */
if(edad >= 18) {
    //si el numero es par hace todo lo que este dentro de la llame en este caso imprimir en la consola
    console.log("Es mayor de edad")
}
else{
    console.log("Es menor de edad")
}

//podemos anidar condicionales
if(edad <90) {
    
    if(edad <80) {
    
    }
}
```

### Ejercicios de clase:

1. crear una funcion que reciba un numero y devuelva si es par o impar.
2. crear una funcion que reciba un numero y devuelva si es positivo, negativo o cero. (return)
3. crear una funcion que indique si es mayor o menor de edad.
4. crear una funcion a la que si le indico el dia de la semana me devuelve si es laboral o no. 
5. crear una funcion donde sus parametros sean jugador uno y jugador 2 y devuleva si el jugador 1 le gana al dos en un juego de piedra papel y tijera. 
6. Modificar la calculadora del dia 25 para que podamos sumar, restar, multiplicar o dividir dos valores utilizando funciones. 


### Operadores logicos

Podemos verificar que multiples operaciones sean verdaderas usando estos operadores:

&& - se tienen que cumplir todas las comparaciones.
|| / se tiene que cumplir al menos una d elas comparaciones.
! - hace lo contrario de lo que es. 

```js
if(edad> 21 && acepteTyC == true){
    //regisrar usuario
}
if(edad> 21 || (edad>10 && autorizacionDelPadre == true)  ){
    //se puede ir de viaje
    else{
        //no se puede ir
    }
}

if(diaSemana == "sabado" || diaSemana == "domingo"){
    return "es fin de semana";
}

if (num%2 !== 0)
 // es impar, significa lo contrario, osea, que no es igual a 0
```

## Uso de Bucles

Los bucles permiten repetir el codigo varias veces. En JS tenemos 3 tipos de bucles:

-`for`: se utiliza cuando sabemos cuantas veces queremos que se repita algo.
-`while`: se utiliza cuando no sabemos cuantas veces se va a repetir el bloque de codigo. 
- `do-while`: Es igual al while pero se jecuta al menos una vez.

```js
// for (iniciador; condicion; incremento)
//let contador es una variable suq me invente y el valor de iniciador puede comenzar en el numero que yo quiera.
for(let contador=0; contador <10; contador++) {
    //me voy a repetir muchas veces
    console.log("Hola Alumnos" + contador)
}


//bucle While
let i=0;
while(i<10){
    console.log("Hola Alumnos")
    i++;

    
}

let salir=false;
while(salir== false){
    console.log("me quedo jugando");
    salir=true;

    
}

//bucle do-While
let i=0;
do {
    console.log("Hola Alumnos");
    
}while{i<5};