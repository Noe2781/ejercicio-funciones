const imagen = document.querySelector("#imagen");
const titulo1 = document.querySelector("#Titulo1");
const titulo2 = document.querySelector("#Titulo2");
const parrafo = document.querySelector("#parrafo");
const enlace = document.querySelector("#enlace");
const cuerpoPag = document.querySelector("body");

const enlace1="https://github.com/Erick-C3?tab=repositories";
const enlace2="https://discord.com/";
const enlace3="https://es.stackoverflow.com/";

const img1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlOoxYy-L9bgLp_8b4tv-a7eaWOGxMccsKg&usqp=CAU";
const img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwyze-rnvdmp59S2P_bDNNgvimrysHg4Kpg&usqp=CAU";
const img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH1ZjyWK90cl-2mZ0IJpiFDHxMBoZirm8Zg&usqp=CAU";

let opcionRecibida = prompt("Ingrese la opcion estetica deseada: 1, 2 o 3");


if (opcionRecibida == 1) {

    cuerpoPag.style.backgroundColor = "orange";
    cuerpoPag.style.color = "black";
    imagen.src = img1;
    titulo1.innerHTML = "Pagina de estudio";
    parrafo.innerHTML = "Trayecto programador";
    enlace.innerHTML= "click aqui para ingresar al enlace";
    enlace.href = enlace1;

}else if (opcionRecibida == 2) {

    
    cuerpoPag.style.backgroundColor = "black";
    cuerpoPag.style.color = "white";
    imagen.src = img2;
    titulo1.innerHTML = "Pagina de estudio";
    parrafo.innerHTML = "Trayecto programador";
    enlace.innerHTML= "click aqui para ingresar a la pagina de discord";
    enlace.href = enlace2;

    
}else if (opcionRecibida == 3) {


    cuerpoPag.style.backgroundColor = "pink";
    cuerpoPag.style.color = "green";
    imagen.src = img3;
    titulo1.innerHTML = "Pagina de estudio";
    parrafo.innerHTML = "Trayecto programador";
    enlace.innerHTML= "click aqui para ingresar a stack overflow";
    enlace.href = enlace3;

}

