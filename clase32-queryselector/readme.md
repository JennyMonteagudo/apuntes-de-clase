## Query Selector

los query selector nos devuelven objetos del tipo `element` que son referencias a los nodos html, o a `null` si no lo encuentra.

```js
//seleccionamos el primer input que posea el atributo type= "text"
const textInput= document.querySelector('input[type="text"]')
```

# QuerySelectorAll

Este nos devuelve una lista de nodos (nodeList) que se comporta como un array, incluso en una 'Lista Vacia' si no encuentra ningun elemento.

```js
//seleccionamos todas las secciones con la clase section
const todosLosDivSection = document.querySelectorAll{'input[type="text"]'}

todosLosDivSection.forEach( item => {
    console.log(item)
})
```

# addEventListener

Escuchamos un evento (click, Keyup, "input", "change", etc) especifico en algunos de nuestros elementos.

```js
primerTextInput.addEventListener("keyup", funcionejecutarCuandoHagaKeyUp())

//ejcutar una funcion cuando me voy del input, y su valor ha cambiado
primerTextInput.addEventListener("change", funcionejecutarCuandoHagaKeyUp())

```