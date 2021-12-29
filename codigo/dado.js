var espacoDados = document.getElementById("espaco-dados");

espacoDados.addEventListener("mousemove", function () {
  let face = Math.floor(Math.random() * 6) + 1;

  switch (face) {
    case 1:
      document.getElementById("dado").src = "estilo/imagens/face1.png";
      break;
    case 2:
      document.getElementById("dado").src = "estilo/imagens/face2.png";
      break;
    case 3:
      document.getElementById("dado").src = "estilo/imagens/face3.png";
      break;
    case 4:
      document.getElementById("dado").src = "estilo/imagens/face4.png";
      break;
    case 5:
      document.getElementById("dado").src = "estilo/imagens/face5.png";
      break;
    case 6:
      document.getElementById("dado").src = "estilo/imagens/face6.png";
      break;
  }
});
