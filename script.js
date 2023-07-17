const form = document.querySelector ("#form");
const nameInput = document.querySelector ("#name");
const emailInput  = document.querySelector ("#email");
const messageTextarea = document.querySelector ("#message");


 form.addEventListener("submit", (event) => {
    Event.preventDefault();
    //esse comando é para que seja colocado um alerta dizendo para colocar o nome da pessoa que está entrando em contato

    if (nameInput.value === "") {
      alert("Por favor, preencha o seu nome!");
      return;

    }

    if (emailInput.value === "") {
      alert("Por favor,coloque seu email!");
      return;
    }
    
    if (messageTextarea ==="")
    //Se todos os campos forem corretamente preenchidos , enviar o form
  form.submit();
 });