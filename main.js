"use strict"
console.log("Début du jeu");
// Création du pion
let pion = document.createElement("img");
pion.src = 'img/pion.png';
pion.style.height = "100px"
// Création de la cage avec un élément TABLE
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";
// Selection de la balise body html
var objRef = document.body;
// Ajout des rangées
for (let x = 0; x < 5; x++) {
    // Créer une rangée
    let tr = cage.insertRow();
    // Ajout des cellules de chaque rangées
    for (let y = 0;y < 5; y++){
        //Créer une cellule
        let td = tr.insertCell();
        td.style.cssText = "border: 1px solid; width: 100px; height: 100px; font-size: 0";
    }
}
// Positionner le pion initiallement au centre 
let x = 2;
let y = 2;
cage.rows[x].cells[y].appendChild(pion);
// Afficher la cage 
objRef.appendChild(cage);


