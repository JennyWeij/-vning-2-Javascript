window.addEventListener("DOMContentLoaded", main) 

let userInput = "Namn";

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
    // setAllConstants();
}

/*Startsida som välkomnar användaren och ber denne fyll i sitt namn */
function loadStartPage() { /*En knapp med texten "Nu kör vi" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här får du lära dig mer om två stycken spännande djur. Fyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.addEventListener("click", loadGorillaOrPanda);

}

/*Sida som välkomnar användaren med tidigare ifyllt namn, sidan
låter användaren välja att börja lära sig mer om gorillan eller pandan */
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

/*Sida som låter användaren lär sig mer om gorillan */
function loadGorilla() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    textStartsida.textContent = "För att lära dig mer om gorilla kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.addEventListener("click", loadQuizGorilla);

}

/*Sida som låter användaren göra en quiz om gorillor */
function loadQuizGorilla() { /*TVÅ knappar med texten "Sant" & "Falskt" */
const textStartsida = document.getElementById("explainText");
const startButton = document.getElementById("btn-1");
const secondButton = document.getElementById("btn-2");

textStartsida.textContent = "Finns det mer än 1000 gorillor i världen?";

startButton.textContent = "Sant";
secondButton.textContent = "Falskt";
}

/*Sida som låter användaren lär sig mer om pandan */
function loadPanda() { /*En knapp med texten "Starta quiz" */
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    textStartsida.textContent = "För att lära dig mer om pandan kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.addEventListener("click", loadQuizPanda);
    
}

/*Sida som låter användaren göra en quiz om pandor */
function loadQuizPanda() { /*TVÅ knappar med texten "Sant" & "Falskt" */
const textStartsida = document.getElementById("explainText");
const startButton = document.getElementById("btn-1");
const secondButton = document.getElementById("btn-2");

textStartsida.textContent = "Äter en panda 30 kilo bambu/dag?";

startButton.textContent = "Sant";
secondButton.textContent = "Falskt";

}

