// se suele llamar scrpt.js

//PARTE 1: GENERAR VARIABLES

document.addEventListener("DOMContentLoaded", function(){

    const bodyId= document.body.id;
    console.log("body id es:", bodyId)

    switch(bodyId){
        case "index":
            console.log("Estoy en Home");
            iniHome();
            break;
        case "galeria":
            console.log("Estoy en Galeria");
            iniGaleria();
            break;
        case "contacto":
            console.log("Estoy en Contacto");
            iniContacto();
            break;
    }
    
});

//PARTE 1: codigo Home
function iniHome(){
    console.log("Estoy en Home")
}

//PARTE 1: codigo galeria
async function iniGaleria(){
    console.log("Estoy en Galeria");


    //PARTE 1: declara variables y datos
    const galeriaContainer=document.querySelector(".galeria-container");
    let listaGaleria =[];


    //parte 2 Declarar funciones
    async function traerUsuarios(){
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/users');
            //convertir el string a objeto de JS
            const listaUsuarios = await response.json();
            return listaUsuarios;

            //return lista de usuarios

        } catch (error){
            console.error("Tuvimos un error al encontrar el usuario", error);
            return[];

        }
    }

    
    function imprimirUsuarios(){
        console.log ("mis usuarios son", listaGaleria)
        

        const miGaleriaHTML= listaGaleria.map(usuario => {
            return `<div class="userCard">
                     <h3>${usuario.name}</h3>
                    <a href="mailto:${usuario.mail}"        target="_blank">${usuario.mail}</a>
                      </div>`
        }).join("");
        galeriaContainer.innerHTML=miGaleriaHTML;
    }

    //PARTE 1: declara variables y datos
    listaGaleria = await traerUsuarios();
    imprimirUsuarios();
}





//PARTE 1: codigo contacto
function iniContacto(){
    console.log("Estoy en Contacto")
}


