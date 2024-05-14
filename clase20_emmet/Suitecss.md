#SuiteCSS

Links Oficiales>
-Link a [Documentacion] (https://suitcss.github.io/) Oficial Suite


SuitCss se utiliza mucho en frameworks o librerias como react, Angular, etc. Es una nomenclatura basada en BEM, pero con algunas diferencias. Sus partes `Componentes`, `Modificadores`,` Utilidades/Utilities` y `Estados`.

### partes de Suite Css.
-Componentname (PascalCase)
-Componentname-element (-camelCase)
-ComponentName--modifierName (--camelCase)
-ComponentName.is-stateOfComponent {.isPascalCase, .hasPascalCase, .focusPascalCase, .onPascalCase}

-u-utilityName (u-camelCase)

### Componentes (bloques) y elementos
Se basa en tener bloques y elementos como en BEM, pero estos se escriben en pascal Case.

```css
/*Componente*/
.Galeria {}

/*Elementos (Descendants)*/
.Galeria-titulo {}
.Galeria-imagen {}
.Galeria-pieGaleria{}
```

### Modificadores
Al igual que en BEM se utilizan modificadores

```css
.Galeria--principal {}
```

### Estados
Los estados son modificadores `TEMPORALES` de un element (activo, inactivo, cerrado, abierto), y son independientesde los componentes en lo que usa.

```css
.MyComponent.isActive{}
.Mygallery.isActive{}
.MyComponent.onHover{}
.MyComponent.isLoading{}

```

```html
<div class="MyComponent isActive"></div>
<div class="MyComponent"></div>
<div class="MyComponent"></div>
<div class="MyGallery isActive"></div>
<div class="MyGallery"></div>
<div class="MyGallery"></div>
```

### Utilizades/ utilities
Es una de las principales diferencias con BEM, ya que se agrega el concepto de utilidad. Es una clase que se puede aplicar a "Cualquier etiqueta" que no tiene relacion alguna con un componente o elemento. Se describen con una `u-` al frente.

```css
.u-textCenter{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
.u-bgRed{
 background: red;
}
.u-textRight{

}
```

### Variables
Como escribir SuiteCSS en variabes>

```css
:root{
    /*Ejemplos de variables CSS tradicionales
    --MiColorPrincipal: white;
    --MiColorSecundario: black;
    */

    /*en SUITECSS*/
    --Componente-miColorPricipal: red;
    --Componente-elemento-miColorPricipal: red;
    --Componente-modificador-miColorPricipal: red;
    --Componente-onHover-miColorPricipal: red;
    --Componente-elemento-onHover-miColorPricipal: red;

}

h1 {
    color: var()
}

