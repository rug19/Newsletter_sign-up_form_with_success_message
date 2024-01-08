const successContainerMain = document.getElementById("success-container-main");
const mainContainer = document.getElementById("main-container");
const email = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageError = document.getElementById("error-message");

document.getElementById("myForm").addEventListener("submit", function (event) {
  //Evitar que o formulário seja enviado imediatamente
  event.preventDefault();
  //Exibir mensagem de erro se o e-mail estiver vazio ou não passar na verificação da expressão regular
  if (email.value === "" || !emailRegex.test(email.value)) {
    messageError.style.display = "block";
    successContainerMain.style.display = "none";
    email.style.color = "red";
    email.style.background = "red";
  } else {
    messageError.style.display = "none";
    
  }
});

//Exibir mensagem de sucesso e redefinir o formulário para um novo envio
document.getElementById("myButton").addEventListener("click", function () {
  messageError.style.display = "none";
  successContainerMain.style.display = "none";
  mainContainer.style.display = "block";
});
