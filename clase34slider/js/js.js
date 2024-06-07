//------------------------------
//1. Declaramos Variables
//------------------------------
//Slider
const sliderImages = document.querySelector(".Slider-images");
const listImages = document.querySelectorAll(".Slider-images img");

//Botones
const btnPrev = document.querySelector(".btnPrev");
const btnNext = document.querySelector(".btnNext");

//Contador
const spanActual = document.getElementById("txtActual");
const spanTotal = document.getElementById("txtTotal");

let imgIndex = 0; //indice de imagen actual
const totalImages= listImages.length; //total de imagenes

//EventListeners
btnNext.addEventListener("click", nextImagen); // la parte de nextImagen es lo mismo que poner =>{}
btnPrev.addEventListener("click", prevImagen);


//------------------------------
//2. Funciones
//------------------------------
function nextImagen(){
    imgIndex++;
    if (imgIndex >= totalImages){
        imgIndex=0;
    }
    actualizarContador();
}
function prevImagen(){
    imgIndex--;
    if (imgIndex < 0){
        imgIndex= totalImages;
    }
    actualizarContador();
}

function actualizarSlider(){
    const width= 400;
    sliderImages.style.transform = `translateX(${-width * imgIndex}px)`;
}
function actualizarContador(){
    spanActual.textContent = imgIndex + 1;
    
}

//------------------------------
//3. Ejecutar
//------------------------------

actualizarContador();
spanTotal.textContent = totalImages;


//------------------------------
//3. Crear Intervalos
//------------------------------

let intervalos;
agregarIntervalo();

sliderImages.addEventListener("mouseover", () => {
    clearInterval(intervalos);
})

sliderImages.addEventListener("mouseout", () => {
    agregarIntervalo();
})

function agregarIntervalo(){
    intervalos = setInterval(nextImagen, 1000);
}