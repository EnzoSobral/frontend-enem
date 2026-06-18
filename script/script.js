function cadastro() {
  window.location.href = "cadastro.html";
}

function voltar() {
  window.location.href = "index.html";
}

function entrar() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  document.getElementById("erroEmail").value;
  document.getElementById("erroSenha").value;

  if (!email.includes("@")) {
    document.getElementById("erroEmail").innerHTML = "E-mail inválido";
    return;
  }

  if (senha.length < 8) {
    document.getElementById("erroSenha").innerHTML =
      "Senha mínima de 8 caracteres";
    return;
  }

  alert("Login realizado!");
}

function salvar() {
  let senha = document.getElementById("senha").value;
  let confirmar = document.getElementById("confirmar").value;

  document.getElementById("erroSenha").value;
  document.getElementById("erroConfirmar").value;

  if (senha.length < 8) {
    document.getElementById("erroSenha").innerHTML =
      "Senha mínima de 8 caracteres";
    return;
  }

  if (senha != confirmar) {
    document.getElementById("erroConfirmar").innerHTML =
      "As senhas não coincidem";
    return;
  }

  alert("Inscrição salva com sucesso!");
  window.location.href = "/html/index.html";
}