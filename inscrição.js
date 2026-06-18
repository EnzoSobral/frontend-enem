function toggleNecessidade() {
  let atendimento = document.getElementById("atendimento").value;
  let campo = document.getElementById("campoNecessidade");

  if (atendimento === "sim") {
    campo.style.display = "block";
  } else {
    campo.style.display = "none";
    document.getElementById("necessidade").value = "";
    document.getElementById("erroNecessidade").innerHTML = "";
  }
}

function confirmarInscricao() {
  let lingua = document.getElementById("lingua").value;
  let estado = document.getElementById("estado").value;
  let cidade = document.getElementById("cidade").value;
  let atendimento = document.getElementById("atendimento").value;
  let necessidade = document.getElementById("necessidade").value;

  document.getElementById("erroLingua").innerHTML = "";
  document.getElementById("erroEstado").innerHTML = "";
  document.getElementById("erroCidade").innerHTML = "";
  document.getElementById("erroAtendimento").innerHTML = "";
  document.getElementById("erroNecessidade").innerHTML = "";
  document.getElementById("mensagemSucesso").innerHTML = "";

  let valido = true;

  if (lingua === "") {
    document.getElementById("erroLingua").innerHTML = "Selecione uma língua estrangeira";
    valido = false;
  }

  if (estado === "") {
    document.getElementById("erroEstado").innerHTML = "Selecione um estado";
    valido = false;
  }

  if (cidade === "") {
    document.getElementById("erroCidade").innerHTML = "Selecione uma cidade";
    valido = false;
  }

  if (atendimento === "") {
    document.getElementById("erroAtendimento").innerHTML = "Selecione uma opção";
    valido = false;
  }

  if (atendimento === "sim" && necessidade === "") {
    document.getElementById("erroNecessidade").innerHTML = "Informe sua necessidade especializada";
    valido = false;
  }

  if (!valido) return;

  document.getElementById("lingua").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("atendimento").value = "";
  document.getElementById("campoNecessidade").style.display = "none";
  document.getElementById("necessidade").value = "";

  document.getElementById("mensagemSucesso").innerHTML = "Inscrição realizada para a prova de " + lingua + "!";
}