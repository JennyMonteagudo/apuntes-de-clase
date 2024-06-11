let miFrase="";

miFrase+="Hola, ";//"Hola"
miFrase+="mi nombre es ";//"Hola mi nombre es"
miFrase+="Jenny";//"Hola mi nombre es Jenny"


//INNER
//------------------------

div.innerHTML+="<span>text2</span>";
div.innerTxt ="Hola como andas";

//FECHA
//------------------------

let hoy = new Date();

//sumar un dia
const sumarUnDia = new Date(hoy); //hoy es 10 de junio
sumarUnDia.setDate(hoy.getDate() + 1) //11
console.log(sumarUnDia)

//restar un dia
const restarUnDia = new Date(hoy); //hoy es 10 de junio
restarUnDia.setDate(hoy.getDate() - 1) //9

//restar dos horas
const restarDosHoras = new Date(hoy); //hoy es 10 de junio
restarDosHoras.setHours(hoy.getHours() - 2) //hace dos horas

function cambiarMinutos(fecha, minutos){
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(fecha.getMinutes() + minutos);
    return nuevaFecha;
}

const hoy2= new Date();
const dentroDe5minutos= cambiarMinutos(fecha, 5);
const hace15minutos= cambiarMinutos(fecha, -15);

//MATH RANDOM
//------------------------

function numeroRandomEntre(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

const min=2;
const max=15;
const numeroAleatorio= numeroRandomEntre(min, max);
console.log(`Numero entre ${min} y ${max} es ${numeroAleatorio}`);

//BOM y Objeto Window el bom representa el navegador (chrome, safari, firefoz, Brav, etc)
//windows es el objeto principal del BOM y contiene metodos que nos permite interactuar con el.
//------------------------

const altura= window.innerHeight;
const anchura= window.innerWidth;

//obtener url actual
const url = window.location.href;

//redirigir a otra pagina
window.location.href = "https://google.com";

//Recargar la pagina
window.location.reload();

//abrir una nueva ventana
const nuevaVentana = window.open("https://google.com", "_blank", "width=600, height=400");
nuevaVentana.close(); //cerrar la ventana que abri

//Ejecutar una funcion cada vez que redimensiono mi pantalla
window.addEventListener("resize", () =>{
    const anchura = window.innerWidth;

})


//AGREGAR HTML
//------------------------

const div = document.createElement(`div`); //puedo crear span, h1, header, etc
const imagen= document.createElement(`img`); //<img />
imagen.src="./img/foto1.png";
imagen.alt="Mi foto de perfil";

imagen.addEventListener("click", () =>{
    console.log("le hice click")
})

//en el div agrega la imagen
div.appendChild(imagen);
//en el body amadir el div
document.body.appendChild(div);

//ejemplo con template strings

document.body.innerHTML +=``


//JSON Es un string
//------------------------

//objeto JS
const alumno={
    edad: 25,
    nombre: "Pepito",
    saludar:() => {alert("Hola");}
}

//convertir un objeto JS en string de JSON
const jsonString2= JSON.stringify(alumno);
console.log(jsonString2);

//string JSON
const jsonString=`{"edad": 25, "nombre": "Pepito"}`;
console.log(jsonString);

//convertir un string de jsona un objeto de JS
const objeto= JSON.parse(jsonString);
console.log(objeto); //todo el objeto
console.log(objeto.edad); //25

