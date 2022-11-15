window.addEventListener("DOMContentLoaded", main)

/*fördröj texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartScene
}

function loadStartPage() {

let rubrikStart = document.getElementById("rubrikStart");
let textStartsida = document.getElementById("textStartsida");
let button1 = document.getElementById("opt-1");
let startButton = document.getElementById("startButton");

rubrikStart.textContent = "Välkommen till PlanetEn!";
textStartsida.textContent = "Här får du lära dig mer om vår fantastiska planet och några spännande djur. Fyll i ditt namn och klicka på knappen så kör vi igång!";
button1.textContent = "Nu kör vi!"
button1.addEventListener("click", loadPlanetOrAnimals);

}

function loadPlanetOrAnimals() {
    
}



