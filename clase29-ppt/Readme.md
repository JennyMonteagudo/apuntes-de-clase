# Objeto

Es una coleccion de propiedades y todas tienen sus respectivos nombre (que se llaman claves) y valores. Sus valores pueden ser de todo tipo: datos, variables, funciones, otros objetos, etc. En el caso de las funciones, a estas propiedades las llamamos metodos.

```js
const miObjeto= {
    propiedad1 : "valor1",  (se llaman propiedades y valores)
    propiedad2: 2,
    propiedad3: false,
    metodoSumar: function (num1, num2){
        return num1+num2;
    },
    metodo2: function() {
        //otras propiedades
    }
}
```

POdemos acceder a las propiedades del objeto desde sus metodos usando la palabra clave `this`. el uso de `this` hace referencia El mismo para acceder a sus valores. 

Por ejemplo:

```js
const coche = {
    marca: "Tesla",
    modelo: "ModelX",
    kmsRecorridos: "7777",
    color: "Negro",
    //metodos
    encender: function (){
        //uso this para acceder a los kilometros actuales.
        const kms = this.kmsRecorridos; //7777
        console. log(`Arrancando el coche con ${kms} kms`);
    },
    buscarme: function (){
        console.log(`Manejar automaticamente hasta la posision de GPS ${positionGPS}`)
    }
}

//LEER kms recorridos si lo tuviera que buscar desde fuera tendria que poner:

const kilometros = coche.kmsRecorridos; //7777
//o pudimos LEER
console.log(coche.kmsREcorridos);

//ESCRIBIR nuevos kms recorridos:
coche.kmsRecorridos = kilometros +5; //kmsRecorridos = 7782

//ESCRIBIR Pintar el tesla de Rojo:
coche.color = "rojo";

//para EJECUTAR metodos hay que ponerle perentesis:
coche.encender();

//EJECUTAR que me venga a buscar
console.log("Te estoy yendo a buscar")
coche.buscarme("posicion del GPS")

//en el ultimo ejemplo console y coche son OBJETOS y log y buscarme son METODOS 

```