const cursos = [
  ["Engenharia Civil", "Exatas"],
  ["Ciência da Computação", "Exatas"],
  ["Matemática", "Exatas"],
  ["Física", "Exatas"],
  ["Direito", "Humanas"],
  ["História", "Humanas"],
  ["Geografia", "Humanas"],
  ["Psicologia", "Humanas"],
  ["Medicina", "Natureza"],
  ["Biologia", "Natureza"],
  ["Enfermagem", "Natureza"],
  ["Farmácia", "Natureza"],
  ["Letras", "Linguagens"],
  ["Jornalismo", "Linguagens"],
  ["Publicidade", "Linguagens"],
  ["Tradução", "Linguagens"]
];

function filtrar(area) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let filtrados = cursos.filter(function(curso) {
    return curso[1] === area;
  });

  if (filtrados.length === 0) {
    resultado.innerHTML = "<p class='erro'>Nenhum  curso encontrado para esta área.</p>";
    return;
  }

  resultado.innerHTML = "<h3>Cursos disponíveis:</h3>";

  for (let i = 0; i < filtrados.length; i++) {
    resultado.innerHTML += "<div class='curso-item'>" + filtrados[i][0] + "</div>";
  }
}