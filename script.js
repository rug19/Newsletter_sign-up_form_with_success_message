const successContainerMain = document.getElementById("success-container-main");
const mainContainer = document.getElementById("main-container");
const email = document.getElementById("email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const messageError = document.getElementById("error-message");
const form = document.getElementById("myForm");

//Function que evita o envio imediato do formulário.
const handleSubmit = (e) => {
  e.preventDefault();

  // Exibir mensagem de erro se o e-mail estiver vazio ou não passar na verificação da expressão regular
  if (email.value === "" || !emailRegex.test(email.value)) {
    messageError.style.display = "block";
    successContainerMain.style.display = "none";
    email.style.color = "#e39c99";
    email.style.background = "#ffe8e6";
  } else {
    messageError.style.display = "none";
    successContainerMain.style.display = "block";
    mainContainer.style.display = "none";
  }
};
form.addEventListener("submit", handleSubmit);

// Exibir mensagem de sucesso e redefinir o formulário para um novo envio
document.getElementById("myButton").addEventListener("click", function () {
  messageError.style.display = "none";
  successContainerMain.style.display = "none";
  mainContainer.style.display = "block";
});


