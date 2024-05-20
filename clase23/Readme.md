# Grid CSS

- es un sistema para crear y organizar nuestro layout
- no es opuesto a flex ni a float.
-

Existe la propiedad minmax() nos permite definir un tama;o minimo y maximo para las columnas y filas:

```css
/*minmax(valorMinimo, ValorMaximo)*/
.container{
    dispay: grid;
    grid-template-column: minmax(100px, 1fr) minmax(100px,1fr)  1fr;
}
```

Existe otra propiedad llamada repeat() que nos permite repetir un numero de veces un tama;o de columna y fila.

```css
.container{
    display: grid;
    /*grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; lo de abajo es lo mismo*/
    grid-template-columns: repeat(6, 1fr) 100px;
}
```

```css
.container{
    display: grid;
    /*grid-template-columns: 1fr 1fr 1fr 100px; lo de abajo es lo mismo*/
    grid-template-columns: repeat(3, 1fr) 100px;
}
```
Podemos nombrar las celdas utilizando "grid-template-areas" y asignar un nombre a cada celda vacia.

```css
.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3,100px);
    grid-gap: 10px;
    grid-template-areas:
      "col1 col2 col3"
      "col1 col2 col3"
      "col1 col2 col3"
}
```