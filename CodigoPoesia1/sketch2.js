let y = 50;
let f;

/** Código Poesia
*/

let art = [
  "o", "meu", "seu", "nosso", "aquele", "este", "qualquer", "um", "uma", "o único", "ele", "ela"
];
let artigo = [
  "a", "minha",  "nossa", "aquela", "esta", "qualquer", "sua", "dela", "a única", "ele", "ela"
];
let adj = [
  "feliz", "rodando", "vermelho", "rápida", "elastico", "sorridente", "inacreditável", "infinito", "surpreendente", 
  "misteriosa", "brilhante", "verde", "azul", "cansado", "dificíl", "suave", "transparente", "alta", "curta", 
  "excelente", "zoada", "silência", "rara", "normal", "típica", "viva", "limpa", "glamorosa", 
  "chique", "jeitosa", "preguiçosa", "assustador", "desamparada", "magrela", "melódica", "timída", 
  "gentil", "bravo", "bom", "antiga", "moderno", "jovem", "fofa", "quente", "fria", 
  "seca","molhada", "pesado", "industrial", "complexo", "acurrado", "maravilhoso", "legal",
  "falsa", "irreal", "pelada", "inteligente", "esperta", "curiosa", "estranha", "única", "vazia", 
  "cinza", "saturada", "embaçado"
];
let nou = [
  "floresta", "arvóre", "flor", "céu", "grama", "montanha", "computador", "homem", "mulher", "cachorro", 
  "elefante", "formiga", "rua", "borboleta", "celular", "programa", "avó", "escola", "cama", "rato", 
  "teclado", "bicicleta", "bebida", "gato", "camisa", "tapete", "parede", "poster", 
  "aeroporto", "ponte", "rua", "riacho", "praia", "escultura", "piano", "fruta", 
  "banana", "maça", "morango", "caju", "gaita", "janela", "folha", 
  "lápis", "coração", "fotografia", "pintura", "chapéu", "espaço", "garganta", 
  "missão", "objetivo", "projeto", "cuscuz", "moinho", "lampâda", "céu", 
  "mente", "corpo", "casa", "corpo", "Monólitos", "sol", "lua", "astro", "mar"
]; 
let pre = [
  "embaixo", "na frente", "acima", "atrás", "próximo", "seguindo", "dentro", "ao lado", 
  "não gosto", "gosto", "contra", "através", "considerando", "sem", 
  "com"
];
let ver = [
  "canta", "dança", "corre", "anda", 
  "voa", "move", "moveu", "vai mover", "brilha", "reluz", "gira", "prometida", 
  "abraça", "traí", "espera", "aguarda", "estuda", "nada", 
  "viaja", "vai viajar", "toca", "tocou", "aproveita", "aproveitará", 
  "ilumina", "surge", "come", "bebe", "calcula", "beijada", "passou", "ouviu", 
  "navega", "responde", "sorri", "sorrirá", "vencerá", 
  "encanta", "está pensando", "é", "foi", "será", "pode ser", "nunca foi"
];

function write_word(words) {
  let n = int(random(words.length));
  textSize(random(20, 30));
  text(words[n], 100, y);
  print (words[n] + " ");
  y = y + 30;
}
function write_titulo(words) {
  let n = int(random(words.length));
  textSize(50);
  text(words[n], 70, y);
  y = y + 50;
}
function new_sentence(tipo) {
  background(255);
  y = 80;
  write_titulo(nou);
  if (tipo == 1) {
  write_word(artigo);
  write_word(adj);
  write_word(nou);

  write_word(ver);
  write_word(pre);

  write_word(artigo);
  write_word(adj);
  write_word(nou);
 } else if (tipo == 2) {
  write_word(artigo);
  write_word(adj);
  write_word(nou);
 } else if (tipo == 3) {
  write_word(pre);

  write_word(artigo);
  write_word(adj);
  write_word(nou);
 } else if (tipo == 4) {
     write_word(ver);
  write_word(ver);
  write_word(art);

 } else if (tipo == 5) {
     write_word(artigo);
  write_word(nou);
  write_word(ver);
  write_word(adj);

 }
print (tipo);
}

function setup() {
  createCanvas(400, 400);
  background(255);
  
  // Create the font
  // printArray(PFont.list());
 // f = loadFont("Karma-Medium.otf");
 // textFont(f);
  // textAlign(CENTER, CENTER);
  
  fill('#000000');
  new_sentence(int(random(1,6)));
}
function draw() {
}
function mousePressed() {
  let random_number = int(random(1,6));
  new_sentence(random_number);
}

function keyPressed() {
  let random_number = int(random(1000000));
 // save(random_number + ".png");
 save("verso" + Date.now() + ".png");}

 function iniciarSketch() {
  setup(); // Chama a função setup() do p5.js para iniciar o sketch
}