"use strict"
console.log("Début du jeu");
// Choix du nombre de case
let nbrCase = 5;
//var tailleCase = 100/nbrCase - 2;
//console.log(tailleCase);

// Création du pion
let pion = document.createElement("img");
pion.src = 'img/pion.png';
//pion.style.height = "calc("+tailleCase+"vh - 2px)";
//pion.style.width = " "+tailleCase+"vw";
pion.style.height = "100px";

// Création de la cage avec un élément TABLE
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";
// Selection de la balise body html
var objRef = document.body;
//objRef.style.cssText = "padding: 200px;"
// Ajout des rangées
for (let x = 0; x < nbrCase; x++) {
    // Créer une rangée
    let tr = cage.insertRow();
    // Ajout des cellules de chaque rangées
    for (let y = 0;y < nbrCase; y++){
        //Créer une cellule
        let td = tr.insertCell();
        //td.style.cssText = "border: 1px solid; width:"+tailleCase+"vw; height:"+tailleCase+"vh; font-size: 0;text-align:center";
        td.style.cssText = "border: 1px solid; width:100px; height:100px; font-size: 0;text-align:center";
    }
}
// Positionner le pion initiallement au centre 
let x = 2;
let y = 2;
cage.rows[x].cells[y].appendChild(pion);
// Afficher la cage 
objRef.appendChild(cage);
// Ecouter les saisies claviers
window.addEventListener('keydown', evt => {
    console.log(evt.key);
    // Modifier les coordonnées x,y en fonction de la flèche pressée
    if (evt.key == 'ArrowUp' && x > 0) x--;
    else if (evt.key == 'ArrowRight' && y < nbrCase-1) y++;
    else if (evt.key == 'ArrowDown' && x < nbrCase-1) x++;
    else if (evt.key == 'ArrowLeft' && y > 0) y--;
    // Bouger le pion
    cage.rows[x].cells[y].appendChild(pion);
    var pionBonusID = document.getElementById('pionBonus');
    console.log(pionBonusID);
}, false);


var IntervalPionBonus = setInterval(placementPionBonus, 1000);
// Ajout du pion bonus 
function placementPionBonus(){
    let pionBonusID = document.getElementById('pionBonus');
    if (pionBonusID){
        pionBonusID.remove();
    }
    // console.log(x+" | "+y+" | "+xAleatoire+" | "+yAleatoire);
    // if ((xAleatoire == x) && (yAleatoire == y)){
    //     console.log('arret');

    //     clearInterval(IntervalPionBonus);
    // }
    do  {
        var xAleatoire = Math.floor(Math.random() * (nbrCase - 1)) + 1;
        var yAleatoire = Math.floor(Math.random() * (nbrCase - 1)) + 1; 
    } while ((xAleatoire == x) && (yAleatoire == y));
    //console.log('abscisse = '+xAleatoire+' | ordonnée =  '+ yAleatoire);
    let pionBonus = document.createElement("img");
    pionBonus.src = 'img/bonus.png';
    pionBonus.setAttribute("id","pionBonus");
    //pionBonus.style.height = "calc("+tailleCase+"vh - 2px)";
    pionBonus.style.height = "100px";
    cage.rows[xAleatoire].cells[yAleatoire].appendChild(pionBonus);
    //console.log(pionBonus);
    //console.log(x+" | "+y+" | "+xAleatoire+" | "+yAleatoire);

    
}



