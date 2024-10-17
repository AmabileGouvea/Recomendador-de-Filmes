// shang-chi e a lenda dos dez anéis, 12, ação, fantasia, aventura
// alice no país das maravilhas, 10, infantil, aventura
// piratas do caribe: navegando em águas misteriosas, 12, aventura, ação
// harry potter e o prisioneiro de azkaban, 12, infantil, fantasia
// o estranho mundo de jack, 9, fantasia, musical
// o cavaleiro solitário, 14, ação, aventura, faroeste
// frozen, 12, aventura
// festa no céu, 5, aventura, fantasia

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("#009688");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "o cavaleiro solitário";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "piratas do caribe: navegando em águas misteriosas";          
        } else{
         return "frozen";
        }
      } else {
        if (gostaDeFantasia) {
          return "festa no céu";
        } else {
          return "o estranho mundo de jack";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "alice no país das maravilhas";
    } else {
      return "shang-chi e a lenda dos dez anéis";
    }
  }
}
