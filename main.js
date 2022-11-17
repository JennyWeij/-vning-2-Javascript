window.addEventListener("DOMContentLoaded", main) 

let userInput = "Namn";

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
    // setAllConstants();
}

/* function setAllConstants() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.querySelector(".textStartsida");
    const startButton = document.querySelector(".startButton");
    const secondButton = document.getElementById("btn-2");
    const userInputField = document.getElementById("userInput");
}*/

function loadStartPage() { /*En knapp med texten "Nu kör vi" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const backVideo = document.getElementById("bgVid1");

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här får du lära dig mer om två stycken spännande djur. Fyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.addEventListener("click", loadGorillaOrPanda);

}

function loadGorillaOrPanda() { /*Två knappar med texten "Gorilla" & "Panda" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    document.getElementById("myInputField").style.display = "none";

    rubrikStart.textContent = "Välkommen NAMN!"; 
    textStartsida.textContent = "Du ska få lära dig mer om pandor och gorillor. Vilken av dem vill du börja lära dig om?";
    
    startButton.textContent = "Gorilla";
    startButton.addEventListener("click", loadGorilla)
    secondButton.classList.toggle("secondButton");
    secondButton.textContent = "Panda";
    secondButton.addEventListener("click", loadPanda);

}

function loadGorilla() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    textStartsida.textContent = "För att lära dig mer om gorilla kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.addEventListener("click", loadQuizGorilla);

}

function loadQuizGorilla() { /*TVÅ knappar med texten "Sant" & "Falskt" */
const textStartsida = document.getElementById("explainText");
const startButton = document.getElementById("btn-1");
const secondButton = document.getElementById("btn-2");

textStartsida.textContent = "Finns det mer än 1000 gorillor i världen?";

startButton.textContent = "Sant";
secondButton.classList.toggle("secondButton");
secondButton.textContent = "Falskt";
}

/*Sida om låter användaren lär sig mer om Pandan */
function loadPanda() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    rubrikStart.textContent = "Pandan";
    textStartsida.textContent = "För att lära dig mer om pandan kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.addEventListener("click", loadQuizGorilla);
    
}

// innerHTML

// Fråga David om bakgrundsvideon, hur jag ändrar
// Fråga David om quiz
//Startsida, namn, klicka på knapp.
//Knappar med Besöka gorilla eller pandan
//Gorilla:
//Quiz eller lär dig mer
//Panda:
//Quiz eller lär dig mer


