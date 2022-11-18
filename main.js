window.addEventListener("DOMContentLoaded", main);

/**Variabel som sparar namnet från inputfältet */
let userName = "";

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
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
    startButton.onclick = loadGorillaQ1;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/** Sida som låter användaren göra en quiz, med tre frågor, om gorillor */
function loadGorillaQ1() { /*Ta bort video ersätt med bild*/
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    document.getElementById("textBox").innerHTML = "";
    
    /*lägg till bild på gorilla i bakgrunden*/
     // Fråga 1: Finns det mer än 1000 gorillor i världen?; 

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ1Correct;
    secondButton.onclick = loadGorillaQ1Wrong;

}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadGorillaQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    startButton.textContent = "Nästa fråga";

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadGorillaQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    
    startButton.textContent = "Nästa fråga";
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

// function loadGorillaQ2() {

//     // Fråga 2: Finns det mer än 1000 gorillor i världen?;
// }

// /**Sida som visar att användaren har svarat rätt på fråga 1. */
// function loadGorillaQ2Correct() {
//     const textStartsida = document.getElementById("explainText");
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

//     startButton.textContent = "Nästa fråga";

//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");
// }

// /**Sida som visar att användaren har svarat fel på fråga 1. */
// function loadGorillaQ2Wrong() {
//     const textStartsida = document.getElementById("explainText");
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");
    
//     startButton.textContent = "Nästa fråga";
    
//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");

// }

// function loadGorillaQ3() {
    // const startButton = document.getElementById("btn-1");
    // const secondButton = document.getElementById("btn-2");

    // document.getElementById("textBox").innerHTML = "";
//     // Fråga 2: Finns det mer än 1000 gorillor i världen?;
// }

// /**Sida som visar att användaren har svarat rätt på fråga 1. */
// function loadGorillaQ3Correct() {
//     const textStartsida = document.getElementById("explainText");
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

//     startButton.textContent = "Nästa fråga";

//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");
// }

// /**Sida som visar att användaren har svarat fel på fråga 1. */
// function loadGorillaQ3Wrong() {
//     const textStartsida = document.getElementById("explainText");
//     const startButton = document.getElementById("btn-1");
    
//     startButton.textContent = "Nästa fråga";
    
//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");

// }

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

    startButton.onclick = loadPandaQ1;
    
        // Gör knappen osynlig
    secondButton.classList.add("secondButton");
    
}

/**Sida som låter användaren göra en quiz, med tre frågor, om pandor */
function loadPandaQ1() { /*TVÅ knappar med texten "Sant" & "Falskt" */
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    // p.textContent = "Äter en panda 30 kilo bambu/dag?";

    //Byt till bild istället för video

    // document.getElementById("textBox").innerHTML = "";
    // document.body.append(p);

    document.getElementById("textBox").innerHTML = "";

    /*lägg till bild på panda i bakgrunden*/

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadPandaQ1Correct;
    secondButton.onclick = loadPandaQ1Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadPandaQ1Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadQuizQ2Panda;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadPandaQ1Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    
    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadQuizQ2Panda;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/**Sida som visar fråga 2 för användaren. */
function loadPandaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    p.textContent = "Äter en panda 30 kilo bambu/dag?";

    document.getElementById("textBox").innerHTML = "";
    // document.body.append(p);

    // div.innerHTML = ""; lägg till p elementet och boxen på nedan sätt
    // div.append(rubrikStart, textStartsida, startButton, secondButton);

    /*lägg till bild på gorilla i bakgrunden*/

    // Fråga 2: Pandor kan klättra i träd, och de kan simma. (SANT)

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

// /**Sida som visar att användaren har svarat rätt på fråga 2. */
// function loadPandaQ2Correct() {
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

//     startButton.textContent = "Nästa fråga";
//     startButton.onclick = loadQuizQ3Panda;


//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");
// }

// /**Sida som visar att användaren har svarat fel på fråga 2. */
// function loadPandaQ2Wrong() {
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");
    
//     startButton.textContent = "Nästa fråga";
//     startButton.onclick = loadQuizQ3Panda;
    
//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");

// }

// /**Sida som visar fråga 3 för användaren. */
// function loadPandaQ3() {
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

//     p.textContent = "Äter en panda 30 kilo bambu/dag?";

//     document.getElementById("textBox").innerHTML = "";
//     document.body.append(p);

//     Fråga 3: Pandor bajsar upp till 20 gånger om dagen. (FALSKT)

//     // div.innerHTML = ""; lägg till p elementet och boxen på nedan sätt
//     // div.append(rubrikStart, textStartsida, startButton, secondButton);

//     /*lägg till bild på gorilla i bakgrunden*/

//     startButton.textContent = "Sant";
//     secondButton.textContent = "Falskt";

//     startButton.onclick = loadPandaQuizQ3Correct;
//     secondButton.onclick = loadPandaQuizQ3Wrong;

//     // Gör knappen synlig
//     secondButton.classList.remove("secondButton");
// }

// /**Sida som visar att användaren har svarat rätt på fråga 2. */
// function loadPandaQ3Correct() {
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

//     startButton.textContent = "Klar!";
//     secondButton.textContent = "Gör gorillans quiz";

        // Pandor bajsar 40 gånger om dagen

//     //startButton.onclick = loadPandaQuizQ3Correct; TACK OCH GODNATT, länk will WFF
//     secondButton.onclick = loadGorilla;

//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");
// }

// /**Sida som visar att användaren har svarat fel på fråga 2. */
// function loadPandaQ3Wrong() {
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");

       // Pandor bajsar 40 gånger om dagen
    
//     startButton.textContent = "Klar!";
//     secondButton.textContent = "Gör gorillans quiz";

//     //startButton.onclick = loadPandaQuizQ3Correct; TACK OCH GODNATT, länk will WFF
//     secondButton.onclick = loadGorilla;

//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");

// }

function changeVideo(src) {
    const video = document.querySelector('video');
    video.src = src
}


function changePicture(src) {
    const picture = document.querySelector('img');
    picture.src = src
}


// changeVideo("./Videos/gorillaVideo.mp4");
// changeVideo("./Videos/pandaVideo.mp4");

    // div.innerHTML = ""; lägg till p elementet och boxen på nedan sätt
    // div.append(rubrikStart, textStartsida, startButton, secondButton);

