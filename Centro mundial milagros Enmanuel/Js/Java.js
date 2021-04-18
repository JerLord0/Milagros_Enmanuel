/*Variables*/
var Contenedor_formularios = document.querySelector(".Contenedor_formularios");
var Formulario_Login = document.querySelector(".Formulario_Login");
var Formulario_Registro = document.querySelector(".Formulario_Registro");
var Caja_Inicio = document.querySelector(".Caja_Inicio");
var Caja_Registro = document.querySelector(".Caja_Registro");

/*Funciòn del ancho de pagina*/
function widthPagina(){
    if(window.innerWidth > 850){
        Caja_Inicio.style.display = "block";
        Caja_Registro.style.display = "block";
    }else{
        Caja_Registro.style.display = "block";
        Caja_Registro.style.opacity = "1";
        Caja_Inicio.style.display = "none";
        Formulario_Login.style.display = "block";
        Formulario_Registro.style.display = "none";
        Contenedor_formularios.style.left = "0px";
    }
}

window.addEventListener("resize", widthPagina);

/*Funciòn del boton registro*/
function registro(){
    if(window.innerWidth > 850){
        Formulario_Registro.style.display = "block";
        Contenedor_formularios.style.left = "410px";
        Formulario_Login.style.display = "none";
        Caja_Registro.style.opacity = "0";
        Caja_Inicio.style.opacity = "1";
    }else{
        Formulario_Registro.style.display = "block";
        Contenedor_formularios.style.left = "0px";
        Formulario_Login.style.display = "none";
        Caja_Registro.style.display = "block";
        Caja_Inicio.style.display = "none";
    }
}

document.getElementById("btn_Registro").addEventListener("click", registro);

/*Funciòn del Inicio*/
function Inicio(){
    if(window.innerWidth > 850){
        Formulario_Registro.style.display = "none";
        Contenedor_formularios.style.left = "10px";
        Formulario_Login.style.display = "block";
        Caja_Registro.style.opacity = "1";
        Caja_Inicio.style.opacity = "0";
    }else{
        Formulario_Registro.style.display = "block";
        Contenedor_formularios.style.left = "0px";
        Formulario_Login.style.display = "none";
        Caja_Registro.style.display = "none";
        Caja_Inicio.style.display = "block";
        Caja_Inicio.style.opacity = "1";
    }
}

document.getElementById("btn_Inicio").addEventListener("click", Inicio);





















