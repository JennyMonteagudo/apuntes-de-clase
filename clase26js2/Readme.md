# JS continuacion

## Mas tipos de Datos

- Undefined: valor que se le asigana a una variable que no tiene valor. (se declara pero no se le asigna valor.)

```js
//otros tipos de datos
let noDefinido; //undefined
```

- Null: Valor que se le asigana a una variabe para idicar que no tiene valor intencionalmente.

```js
//otros tipos de datos
let varNula="texto"; //string
varNula=null;
```
- NaN (Not a Number): valor que obtenemos cuando se espera un numero pero no lo es.

```js
let noEsUnNumero=NaN; //Not A Number
```

- Empty (vacio): Un string con valor vacio "" o usar ''

```js
let vacio= ""; //Empty
```

- Funciones

```js
let saludar= function () {
    console.log("HOla a Todos"); //una funcion
}
```

- Fechas

```js
let hoy = new Date(); //Fecha, que en realidad es un objeto
```

podemos siempre ver que tipo de dato es una variable utilizando el operador `typeof` (tipo de dato)

```js
console.log(typeof noDefinido); //undefined
console.log(typeof varNula); //object
console.log(typeof noEsUnNumero); //number
console.log(typeof vacio); //string
console.log(typeof saludar); //function
console.log(typeof hoy); //object
```

## Consola (Chrome Developers Tool)

La consola nos permite imprimir mensajes y depurar nuestro codigo. podemos imrpimir mensajes de diferentes tipos.

Tambien nos permite filtrar los mensajes segun su tipo.

```js
//Mensajes informativos
console.log["Este es un mensaje Informativo"];
//Mensaje de error
console.error["Este es un mensaje de ERROR"];
//Mensajes de Advertencia
console.warn["Este es un mensaje de Advertencia"];
//Mensajes de Informacion
console.info["Este es un mensaje Informativo"];
```

## Operadores

son simbolos que nos permiten hacer operaciones en JS. Hay distintos tipos por ejemplo aritmetrico, de asignacion, de comparacion, logica, etc.

### Operadores Aritmeticos

Operaciones Matematicas

- Suma +:
- Resta -:
- Multiplicacion *: multiplica valores
- Division /: divide valores
- Modulos %: Devuelveel resto de la division de 2 valores. Ej: 5/2=2; queda 1
- incremento: ++: Incrementa en 1 el valor de la variable.
- decremento --: Decrementa en 1 el valor.

```js
let a =10;
let b =5;

let suma = a+b; //15
let resta = a-b; //5
let multiplicacion= a*b; // 50
let division = a/b; //2
let modulo = a % b; //0
let incremento= a++;//11
let decremento= b++; //4
```

Un ejemplo de modulo muy comun es para saber si un numero es par o impar.
Si el resto de la division de un numero por dos es igual a 0 es PAR.

```js
let numero=10;
let esPar = (numero % 2 ===0); // es true
let esImpar= (numero % 2 !== 0); //es false
```

## Operadores Comparativos

Se utiliza para comparar 2 valores en JS.

- Igual (==): Comparo si 2 valores son iguales
- Estrictamente Igual (===): Compara si 2 valores son iguales y del mismo tipo.
- Mayor que `>`:
- Menor que `<`
- Mayor o igual que `>=`
- Menor o igual que `<=`

```js
let num1 = 10;
let num2 = 5;

let esIgual = (num1 == num2); //false
let estrictamenteIgual = (num1 === num2); //false, es una igualdad estricta.
let esDistinto= (num1 != num2)//true
let esMayor= (num1 > num2)//true
let esMenor= (num1 < num2)//false
```

## Funciones

Es un bloque de codigo o algoritmo que realiza una operacion especifica. puede recibir valores de entrada, y devolver un unico resultado.

```js
function Saludar( nombre, edad ){
    // codigo que va a realizar mi funcion, rodeado de {}
    console.log("Hola a todos, mi nombre es " + nombre);
    console.log("Mi edad es " + edad);
}

Saludar( "Juan", 18);
Saludar( "Tomas", 30);
Saludar( "Maria", 25);