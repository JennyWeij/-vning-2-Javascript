window.addEventListener("DOMContentLoaded", main);

/**Variabel som sparar namnet från inputfältet */
let userName = "";

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
    // setAllConstants();
}

/** Syftet med funktionenStartsida som välkomnar användaren och ber denne fyll i sitt namn */
function loadStartPage() { /*En knapp med texten "Nu kör vi" */
    const rubrikStart = document.getElementById("rubrik");
    const myInputField = document.getElementById("userName");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här får du lära dig mer om två stycken spännande djur. Fyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.onclick = loadGorillaOrPanda;

    startButton.onclick = function() {
        userName = myInputField.value 
        loadGorillaOrPanda();
    }

}

/** Sida som välkomnar användaren med tidigare ifyllt namn, sidan
låter användaren välja att börja lära sig mer om gorillan eller pandan */
function loadGorillaOrPanda() { /*Två knappar med texten "Gorilla" & "Panda" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    
    // Davids kommentarer efter handledning: const secondButton2 = document.createElement("button");

    // div.innerHTML = "";
    // div.append(rubrikStart, textStartsida, startButton, secondButton);

 // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    document.getElementById("myInputField").style.display = "none";

    rubrikStart.textContent = "Välkommen " + userName + "!"; 
    textStartsida.textContent = "Du ska få lära dig mer om pandor och gorillor. Vilken av dem vill du börja lära dig om?";
    
    startButton.textContent = "Gorilla";
    startButton.onclick = loadGorilla;
    secondButton.textContent = "Panda";
    secondButton.onclick = loadPanda;

}

/** Sida som låter användaren lär sig mer om gorillan */
function loadGorilla() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/gorillaVideo.mp4");

    rubrikStart.textContent = "Gorillan";
    textStartsida.textContent = "För att lära dig mer om gorilla kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.onclick = loadQuiz1Gorilla;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/** Sida som låter användaren göra en quiz, med tre frågor, om gorillor */
function loadQuiz1Gorilla() { /*TVÅ knappar med texten "Sant" & "Falskt" */
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("bgStart").innerHTML = "";
    
    /*lägg till bild på gorilla i bakgrunden*/
    //textStartsida.textContent = "Finns det mer än 1000 gorillor i världen?";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQuizQ1Correct;
    secondButton.onclick = loadGorillaQuizQ1Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadGorillaQuizQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    startButton.textContent = "Nästa fråga";

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadGorillaQuizQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    
    startButton.textContent = "Nästa fråga";
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/** Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizGorillaQ1Correct */
/** Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizGorillaQ1Wrong */

/*Sida som visar den andra frågan för användaren, load quizGorillaQ2 */

/*Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizGorillaQ2Correct */
/*Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizGorillaQ2Wrong */

/*Sida som visar den andra frågan för användaren, load quizGorillaQ3 */

/*Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizGorillaQ3Correct */
/*Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizGorillaQ3Wrong */

/*Sida som låter användaren lär sig mer om pandan */
function loadPanda() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/pandaVideo.mp4");
    
    rubrikStart.textContent = "Pandan";
    textStartsida.textContent = "För att lära dig mer om pandan kommer du nu att få göra en quiz. Du kommer få ett påstående och väljer antingen Sant eller Falskt";

    startButton.textContent = "Starta quiz";

    startButton.onclick = loadQuizQ1Panda;
    
        // Gör knappen osynlig
    secondButton.classList.add("secondButton");
    
}

/**Sida som låter användaren göra en quiz, med tre frågor, om pandor */
function loadQuizQ1Panda() { /*TVÅ knappar med texten "Sant" & "Falskt" */
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    p.textContent = "Äter en panda 30 kilo bambu/dag?";

    document.getElementById("textBox").innerHTML = "";
    document.body.append(p);

    // div.innerHTML = ""; lägg till p elementet och boxen på nedan sätt
    // div.append(rubrikStart, textStartsida, startButton, secondButton);

    /*lägg till bild på gorilla i bakgrunden*/

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadPandaQuizQ1Correct;
    secondButton.onclick = loadPandaQuizQ1Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadPandaQuizQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    startButton.textContent = "Nästa fråga";

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadPandaQuizQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    
    startButton.textContent = "Nästa fråga";
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}




function changeVideo(src) {
    const video = document.querySelector('video');
    video.src = src
}


function changePicture(src) {
    const picture = document.querySelector('picture');
    picture.src = src
}


// changeVideo("./Videos/gorillaVideo.mp4");
// changeVideo("./Videos/pandaVideo.mp4");

/*Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizPandaaQ1Correct */
/*Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizPandaQ1Wrong */

/*Sida som visar den andra frågan för användaren, load quizPandaaQ2 */

/*Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizPandaaQ2Correct */
/*Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizPandaQ2Wrong */

/*Sida som visar den andra frågan för användaren, load quizPandaaQ3 */

/*Sida som visar att användaren har svarat rätt, låter användaren att gå vidare till nästa fråga load quizPandaaQ3Correct */
/*Sida som visar att användaren har svarat fel, låter användaren att gå vidare till nästa fråga load quizPandaQ3Wrong */
