const imagen = document.querySelector("#imagen");
const titulo1 = document.querySelector("#Titulo1");
const titulo2 = document.querySelector("#Titulo2");
const parrafo = document.querySelector("#parrafo");
const enlace = document.querySelector("#enlace");
const cuerpoPag = document.querySelector("body");
const h2NombreUsuario = document.querySelector("#usuario-nombre");

const enlace1="https://github.com/Erick-C3?tab=repositories";
const enlace2="https://discord.com/";
const enlace3="https://es.stackoverflow.com/";

const img1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlOoxYy-L9bgLp_8b4tv-a7eaWOGxMccsKg&usqp=CAU";
const img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwyze-rnvdmp59S2P_bDNNgvimrysHg4Kpg&usqp=CAU";
const img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH1ZjyWK90cl-2mZ0IJpiFDHxMBoZirm8Zg&usqp=CAU";

const imgtTam1 = "200px";
const imgtTam2 = "300px";
const imgtTam3 = "450px";

const tamTexto1 = "15px";
const tamTexto2 = "20px";
const tamTexto3 = "30px";

const tipoTexto1 = "monospace";
const tipoTexto2 = "cursive";
const tipoTexto3 = "fantasy";

const colorTextoUsuario1 = "red";
const colorTextoUsuario2 = "violet";
const colorTextoUsuario3 = "white";






let nombreUsuario = prompt("Ingrese su nombre");
let opcionRecibida = prompt("Ingrese la opcion estetica deseada: 1, 2 o 3");

h2NombreUsuario.innerHTML = nombreUsuario;

function modificarPag(colorFondo, colorTexto, enlaceImg, enlacePag,colortextousuario){
    cuerpoPag.style.backgroundColor = colorFondo;
    cuerpoPag.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.innerHTML= "click aqui para ingresar al enlace";
    enlace.href = enlacePag;
    h2NombreUsuario.style.color = colortextousuario;

}


if (opcionRecibida == 1) {
    
    modificarPag("orange", "black", img1, enlace1,colorTextoUsuario1 );
    imagen.style.width = imgtTam1;
    titulo1.style.fontSize = tamTexto1;
    titulo2.style.fontSize = tamTexto1;
    parrafo.style.fontSize = tamTexto1;

    

  

}else if (opcionRecibida == 2) {
    imagen.style.width = imgtTam2;
    modificarPag("black", "white", img2, enlace2, colorTextoUsuario2);
    titulo1.style.fontSize = tamTexto2;
    titulo2.style.fontSize = tamTexto2;
    parrafo.style.fontSize = tamTexto2;

    

    
}else if (opcionRecibida == 3) {
    imagen.style.width = imgtTam3;
    modificarPag("pink", "green", img3, enlace3, colorTextoUsuario3);
    titulo1.style.fontSize = tamTexto3;
    titulo2.style.fontSize = tamTexto3;
    parrafo.style.fontSize = tamTexto3;




}

