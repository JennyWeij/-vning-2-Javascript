window.addEventListener("DOMContentLoaded", main) 

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
}

function loadStartPage() {

    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.querySelector(".textStartsida");
    const startButton = document.querySelector(".startButton");
    const userName = document.getElementById("user");
    const userInputField = document.getElementById("userInput")

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här får du lära dig mer om vår fantastiska planet och några spännande djur. Fyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.addEventListener("click", loadNatureOrAnimals);

}

function loadNatureOrAnimals() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.querySelector(".textStartsida");
    const startButton = document.querySelector(".startButton");
    const secondButton = document.getElementById("btn-2");

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här kommer du att få lär dig mer om naturen och djuren på vår planet. Vad vill du börja lära dig om?";
    
    startButton.textContent = "Naturen";
    startButton.addEventListener("click", loadNature)
    secondButton.classList.toggle("secondButton");
    secondButton.textContent = "Djuren";
    secondButton.addEventListener("click", loadAnimals)

}

function loadNature() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.querySelector(".textStartsida");

    rubrikStart.textContent = "Naturen";
    textStartsida.textContent = "Här kommer du att få lär dig mer om naturen. Prova gör en quiz eller läs spännande fakta!";
    
}

function loadAnimals() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.querySelector(".textStartsida");

    rubrikStart.textContent = "Djuren";
    textStartsida.textContent = "Här kommer du att få lär dig mer om djuren. Prova gör en quiz eller läs spännande fakta!";
    
}

