// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// arr.unshift(0);
// console.log(arr);

// let dadesclients = [
//   { nom: "Joan", edat: 30 },
//   { nom: "Maria", edat: 25 },
//   { nom: "Pere", edat: [40, 23] },
// ];

// let x = dadesclients[2].edat[1];
// console.log(x);
// for (let cliente of dadesclients) {
//   console.log(cliente);
// }

// let missatge = "Javascript, React, Angular, Vue";

// console.log(missatge.substring(0, 10));
// console.log(missatge.indexOf("React"));
// console.log(missatge.slice(0, 10)); //amb dos parametres es com un substring
// console.log(missatge.slice(0, missatge.indexOf(",")));
// console.log(missatge.replace("Javascript", "TypeScript"));

// total = 100 * Math.random();
// console.log(Math.floor(total));

// function randomColor() {
//   return Math.floor(256 * Math.random());
// }

// console.log(
//   "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
// );
// //Generacion de codigo html
// let r = randomColor();
// let g = randomColor();
// let b = randomColor();
// let codiHtml =
//   "<ul>" +
//   "<p>Tu color tiene las siguientes proporciones de: </p>" +
//   "<li>Rojo: ${r}</li>" +
//   "<li>Verde: ${g}</li>" +
//   "<li>Azul: ${b}</li>" +
//   "</ul>";

// document.getElementById("titulo").innerHTML = codiHtml;

// document.getElementById("boton").onclick = function () {
//   (document.body.style.backgroundColor = randomColor()),
//     randomColor(),
//     randomColor();
// };

// var palabra = "cara";
// var numero = 12321;
// function capicua(palabra) {
//   palabra = palabra.tolowerCase();
//   let palabraInv = palabra.split("").reverse().join("");
//   console.log(palabraInv);
//   if (palabra === palabraInv) return true;
//   else return false;
// }

// console.log(capicua(palabra));

try {
  var a = 5;
  var b = 8;
  var resultado = a + b;
  document.getElementById("content").innerHTML = resultado;
} catch (error) {
  alert(error);
  console.log("error en el programa");
}

try {
  let price = -1;
  if (price < 0) {
    throw new Error("Error, Precio negativo");
  }
} catch (error) {
  console.log(error);
}

function errorCarrito(message) {
  this.name = "Error carrito";
  this.description = this.name + message;
}

let List = document.querySelectorAll(".noticia");
for (let noticia of List) {
  console.log("Info noticia: " + noticia);
}


//Ejemplos fetch
var contenido = document.querySelector('#contenido');
function traer(){
  fetch("texto.txt")
    .then(data => data.text());
  return data;
}