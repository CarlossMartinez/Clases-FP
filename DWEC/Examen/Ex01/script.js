//1

function calcularNota() {
  var mitja = 0;
  var bonus = arguments[0];
  var malus = arguments[1];
}

//problemes = [..arr].slice(2);

//2

let treballadors = [
  { nom: "Joan", llinatges: "Ques Ferrer", edat: 45, sou: 15000 },
  { nom: "Joana", llinatges: "Ferrer Gomila", edat: 35, sou: 15000 },
  { nom: "Pere", llinatges: "Gomila Alarde", edat: 30, sou: 10000 },
  { nom: "Marta", llinatges: "Salas García", edat: 55, sou: 40000 },
];

function pujarSou() {
  treballadors.forEach((treballador) => {
    treballador.sou =
      treballador.edat > 40 && treballador.sou >= 15000
        ? treballador.sou + 2000
        : treballador.sou;
  });

  return treballadors.filter((treballador) => treballador.edat > 40); //El .filter crea una nueva array y usamos una funcion flecha para recorrer el array original
}

console.log(pujarSou(treballadors));

//3
function wheelOfFortune(roda) {
  const resultats = []; //se puede llenar pero no puedes quitar nada
  var contador = 0;

  while (contador < roda.length) {
    const indexPremi = Math.floor(Math.random() * roda.length);
    const premi = roda[indexPremi];

    if (premi != "") {
      resultats.push(premi);
      roda[indexPremi] = "";
      contador++;
    }
    return resultat;
  }
}

//4
function assignaPremis(concursants, premis) {
  const resultats = [];

  if (premis.length != concursants.length) {
    console.error("El nombre de premis i concursants no coincideix");
    return resultats;
  }

  const premisIterator = premis.values();

  for (const concursant of concursants) {
    const premi = premisIterator.next().value;
    const { nom, llinatjes } = concursant;
    resultats.push({ nom, llinatjes, premi });
  }
  return resultats;
}

//6
function alterCase(word) {
  let resultat = "";

  for (let i = 0; i < word.length; i++) {
    i % 2 === 1 ? (resultat += word[i].toUpperCase()) : (resultat += word[i]);
  }
  return resultat;
}

console.log(alterCase("hola como estas"));

//
