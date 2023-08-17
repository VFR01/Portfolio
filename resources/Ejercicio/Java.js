const txtEntrada = document.getElementById("input-texto");
const btnEnviar = document.querySelector(".boton-enviar");
const msnError = document.querySelector(".error");
const msnSalida = document.querySelector(".product-title");
const message = document.querySelector(".message");

btnEnviar.addEventListener("click", enviarTexto);

function enviarTexto(){
    if(txtEntrada.value){
        message.textContent = txtEntrada.value;
        txtEntrada.value = "";
        message.style.display = "block"
        setInterval(() => {
            message.style.display = "none"
        }, 10000);
    }else{
        msnError.style.display = "block"
        setInterval(() => {
            msnError.style.display = "none"
        }, 5000);
    }

}
   
