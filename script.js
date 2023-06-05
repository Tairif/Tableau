let prenoms = ["Christopher", "Christian", "Raphael", "Ryan", "Amaury"];
let resultat = [];

//push qui permet d'ajouter un élément à la fin du tableau
//unshift qui permet d'ajouter un élément au début du tableau

//prenoms.length : longueur du tableau (5)

//Parcours d'un tableau avec une boucle for
// De 0 à 4 puisque la longueur du tableau est de 5 et que l'index commence à 0 par pas de 1
// for (let i = 0; i < prenoms.length; i++) {
//   console.log(prenoms[i]); //Affiche chaque prénom du tableau
// }

// prenom[0] = "Christopher"
// prenom[1] = "Christian"
// prenom[2] = "Raphael"
// prenom[3] = "Ryan"
// prenom[4] = "Amaury"
//Exercice 1
for (let i = 0; i < prenoms.length; i++) {
  //Parcours du tableau
  let p = prenoms[i]; //prenoms[i] = prenom[0] = "Christopher" puis prenom[1] = "Christian" etc...
  if (p[0] === "R") {
    //Si le premier caractère du prénom stocké dans p est un R
    resultat.unshift(p); //Ajoute le prénom au début du tableau
  } else {
    //Sinon
    resultat.push(p); //Ajoute le prénom à la fin du tableau
  }
}
console.log(resultat); //Affiche le tableau resultat

//Exercice 2
let salaire = [1100, 2000, 500, 1800, 1600];
resultat = [];

for (let i = 0; i < salaire.length; i++) {
  let s = salaire[i]; //salaire[i] = salaire[0] = 1100 puis salaire[1] = 2000 etc...
  if (s < 1700) {
    //Si le salaire est inférieur à 1700
    resultat.unshift(s); //Ajoute le salaire au début du tableau
  } else {
    //Sinon
    resultat.push(s); //Ajoute le salaire à la fin du tableau
  }
}
console.log(resultat); //Affiche le tableau resultat

//Exercice 3
let clients = [
  { nom: "christianne", dettes: 2 }, //clients[0].nom = "christianne" et clients[0].dettes = 2
  { nom: "guillaume", dettes: 0 }, //clients[1].nom = "guillaume" et clients[1].dettes = 28
  { nom: "eric", dettes: 200 }, //clients[2].nom = "eric" et clients[2].dettes = 0
  { nom: "bertrand", dettes: 24 }, //clients[3].nom = "bertrand" et clients[3].dettes = 200
];
resultat = [];
let detteActuelle = 0;

// resultat = clients.sort(function (a, b) {
//   //Tri du tableau clients par ordre décroissant des dettes
//   return b.dettes - a.dettes;
// });

for (let index = 0; index < clients.length; index++) {
  let c = clients[index]; //clients[index] = clients[0] = { nom: "christianne", dettes: 2 } puis clients[1] = { nom: "guillaume", dettes: 28 } etc...
  if (c.dettes > detteActuelle) {
    //Si la dette du client est supérieure à la dette actuelle
    resultat.unshift(c); //Ajoute le client au début du tableau
    detteActuelle = c.dettes; //La dette actuelle devient la dette du client
  } else {
    resultat.push(c); //Ajoute le client à la fin du tableau
  }
}
console.log(resultat); //Affiche le tableau resultat