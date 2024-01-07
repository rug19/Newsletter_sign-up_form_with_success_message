const successContainerMain = document.getElementById("success-container-main");
const mainContainer = document.getElementById("main-container");
const email = document.getElementById("email").value;
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const messageError = document.getElementById("error-message");

function formValid() {
  //Exibir mensagem de erro se o e-mail estiver vazio ou não passar na verificação da expressão regular
  if (email === "" || !emailRegex.test(email)) {
    messageError.style.display = "block";
    successContainerMain.style.display = "none";
    // Exibir mensagem de sucesso se o e-mail for válido
  } else {
    messageError.style.display = "none";
    successContainerMain.style.display = "block";
    mainContainer.style.display = "none";
  }
}
//Exibir mensagem de sucesso e redefinir o formulário para um novo envio
function successForm() {
  messageError.style.display = "block";
  successContainerMain.style.display = "none";
  mainContainer.style.display = "block";
}
