# Java Script

Es un lenguaje de pogramacion de alto nivel

Interpretado:
- se ejecuta linea por linea, en tiempo real. No necesita ser compilado.

Va leyendo de linea en linea y en orden.

```js
//ejemplo de un objeto con rpopiedades y metodos 
let alumnos = {
    nombre: "Lucia",
    edad: 35,
    saludar: function() {
        console.log("Hola, mi nombre es Lucia");
    }
}

// quiero imprimir el nombre de mi alumno.
console.log

alumno.saludar();

let console = {
    log: 
}
```
Orientado a objetos:


### Donde probar JS

- En el Navegador: En la pestana de consola, escribiendo directamente.
- En etioquetas de `<script></script>`, se suelen poner dentro del body al final.
- Se pueden utilizar en un archivo .js anclados a nuestro documento. 
- En sitios web externos:
1. playcode.io
2. linangdata.com
3. codepen.io
4. jsfiddle.net

## Funcionalidades
- Manipulacion de DOM (Document Object Model): Agregar, modificar o aliminar elementos HTML y CSS.
- Procesar Formularios: Verificar datos ingresados por el usuario y realizar formularios complejos de multiples secciones. 
- Manejo de animaciones: Manipular los efectos visuales y animaciones en nuestra web.
- Manejo de eventos: Responder a las acciones del usuairo como por ejemplo hacer click o desplazarse por la web. 
- Comunicacion asincrona con servidores mediante AJAX/Fetch: enviar datos de un servidor sin tener que recargar la pagina. 

## Variables Como se escribe

> Son comocajas que usamos para guardar la informacion. Esta informacion puede ser un numero, lista de cosas y muchos otros tipos. Nos permiten almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa

> Definir una variable: Es como darle un nombre a esta caja con un rotulador para poder encontrarla mas adelante.

> Asignar un valor: Es poner cosas dentro de la caja. puede ser un numero, texto, lista, etc.

>Usar esa variable: Abrir la caja y ver que hay dentro. POdemosver las cosasy modificarlas.

En JS las variables se declaran con la palabra `let` o `const`. Antes se definan con la palabra ``var` seguido del nombre de la variable y opcionalmente un valor inicial.

```js
let nombre="Juan"
let edad=46;
const PI=3.1416;
```

## Comentarios en JS:

- Comentario simple: se utilizar `//` para comentar una sola linea de codigo.
- Comentario simple en la misma linea: Se puede agregar la `//` al final de una linea.
- Comentario de bloque: se utiliza`/**/` para hacer comentario de varias ineas.
- Comentarios de documentacion:Se utiliza `/**...*/` para iniciar un bloque de comentarios.

```js
//este es un comentario de una sola linea

let nombre="juan";
console. log("impremir nombre"); //comentario simple en la misma linea.

/*Soy un Comentario
multilinea*/

/**
 * Esta es una funcion que suma 2 numeros.
 * @spam {number} a - El primer numero
 * @spam {number} b - El primer numero
 * @return {number} La suma de los 2n umeros anteriores.
 * 
 * */
function sumar (a,b){
    return a+b;

}
```

## Tipos de datos

- Numeros: enteros, decimales, positivos, negativos, etc.
- Cadenas de Texto (Strings): textos, palabras, frases, 1 letra. Entre comillas simples'', dobles"", o backticks``
-booleanos: Verdadero o falso.
-Lista de cosas (Arrays): Se escribe con corchetes [] y separados con ,
-Objetos (Objects) : Colecciones de propiedades (caracteristicas) y metodos (funcionalidades). Y se escriben con { }.

```js
//PRIMITIVOS vamos a usar comillas simples si dentro del texto quiero usar comillas dobles y al contrario
let texto="Hola Alumnos de CEI";
let textoConComillas= ' Hola estoy muy "bien"';
let textoConComillasSimples= "I'am Tomi";
let texto= `Quiero comillas 'simples' y "dobles"`; //template String

let numeros= 123;
let numeros= "123"; //esto no es un numero se convierte enun texto
let decimales= 22,30;
let negativo= -5;
const PI= 3.1426;
let miNumero= Number ("1234"); //Esto es igual a 1234

let estaPrendido= false;
let isPrimary= true;
let onActive= false;


//REFERENCIALES

//arrays
let alumnosDeDW=["Nerea", "David", "Jenny", ...];
let edades = [25, 32, 18];
let listaMixta= [1, "Juan", true];

//objetos
const alumno = { 
    nombre: "Mario", 
    edad: 33,
    isRecibido: false,
    presentarProyecto: function()=> { isRecibido=true;
}
}

```
