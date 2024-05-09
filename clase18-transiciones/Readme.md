# Transiciones en CSS

## Que son

Son una forma de cambiar lo valores de las propiedades de un elemento de manera suave y gradual. Se pueden aplicar transiciones a cualquier propiedad que acepte valores numericos o de color. por ejemplo se pueden animar el cambio de tamano de un elemento, su color, su color de fondo o su opacidad.

![Imagen de Transicion CSS] ()

## Donde lo podemos utilizar

Podemos concultar el manual oficial: (esto es un ejemplo de como se ven los links)

Sin embargo una forma rapida de identificar propiedades transicionables es buscar propiedades que acepten valores numericos o de color.

Propiedades Numericas:
-Width  
-heigth  
-margin  
-paddin  
-border-width  
-opacity  
-transform (propiedades como scale, rotate, translate)  

Propiedades de color:
-color  
-background-color  
-border-color  
-box-shadow  
-text-shadow  

## Como se define una transicion:

Las transiciones se definen mediante la propiedad `transition` y se pueden personalizar con las sifuientes subpropiedades:

-`transition-property` : Especifica la propiedad que se animara  
-`transition-duration` : Especifica la duracion de la animacion  
-`transition-timing-funtion`: Especifica la funcion de temporarizacion de la animacion.  
-`trensition-delay`: especifica el retraso antes de empezar la animacion.  

```css
div {
    /*Segmentar la transicion en distintas reglas (no recomendada)*/
    transition-property: font-size;
    transition-duration: 4s;
    transition-delay: 2s;


    /*Unificamos cada transicion en una sola regla*/
    /*transition: <property> <duration> <>timing-function <delay>*/
    transition: font-size 4s ease-in-out 2s;
    transition: color 1s

}
```

## Transition Properties
- all: todas las propiedades
-none: ninguna propiedad
- property: una o mas separadas con coma

```css
div{
    transition: all 2s;
    transition: none;
    transition: width 2s, height 3s, background-color 2s
}
```

## Transition Duration y Delay

>`Duration` Tiempo que dura la transicion en completarse.
>`Delay` Tiempo que se retarda la animacion antes de comenzar

## Timing Functions

-`ease` es velocidad. por defecto es lenta-rapida-lenta.  
-`linear` velocidad constante  
-`ease-in` velocidad lenta- luego rapida  
-`ease-out` velocidad rapida luego lenta  
-`ease-in-out` velocidad lenta-rapida-lenta. mix entre ease-in y ease-out. Es mas brusca que la de ease.   
-`cubic-bezier()` Funcion de timing personalizado.


```css
.box{
    width: 100px;
    height: 100px;
    background-color: red;
    transition: width 2s, height 2s, background-color 2s;
}
.box:hover {
    width: 200px;
    height: 200px;
    background-color: blue;
}
```






