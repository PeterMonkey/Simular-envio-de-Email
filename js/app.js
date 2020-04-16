//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');



//EventListener
eventListener();

function eventListener(){
    //Inicio de la aplicacion y desabilita submit
    document.addEventListener('DOMContentLoaded', inicioApp);
}



//Funciones
function inicioApp(){
    //desabilitar el envio
    btnEnviar.disabled = true;
}