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
function Saludar( nombre, edad ){ //lo que esta dentro de los () son los parametros

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

if(diaSemana == "sabado" || diaSemana == "domingo"){
    return "es fin de semana";
}

if (num%2 !== 0)
 // es impar, significa lo contrario, osea, que no es igual a 0
```

## usode Bucles

Los bucles permiten repetir el codigo varias veces. En JS tenemos 3 tipos de bucles:

-`for`: se utiliza cuando sabemos cuantas veces queremos que se repita algo.
-`while`: 
- `do-while`:

```js
// for (iniciador; condicion; incremento)

for(let contador=0; contador <10; contador++) {
    //me voy a repetir muchas veces
    console.log("Hola Alumnos" + contador)
}