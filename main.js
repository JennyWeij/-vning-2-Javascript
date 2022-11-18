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
    textStartsida.textContent = "Här får du lära dig mer om två stycken spännande djur. \nFyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.onclick = loadGorillaOrPanda;

    startButton.onclick = function() {
        userName = myInputField.value 
        loadGorillaOrPanda();
    }

}

/** Sida som välkomnar användaren med tidigare ifyllt namn, sidan
låter användaren välja att börja lära sig mer om gorillan eller pandan */
function loadGorillaOrPanda() { 
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
    textStartsida.textContent = "Du ska få lära dig mer om pandor och gorillor. \nVilken av dem vill du börja lära dig om?";
    
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
    textStartsida.textContent = "Okej " + userName + ", för att lära dig mer om gorillan kommer du nu att få göra en quiz. \nDu kommer få ett påstående och väljer antingen Sant eller Falskt";
    
    startButton.textContent = "Starta quiz";
    startButton.onclick = loadGorillaQ1;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/** Sida som låter användaren göra en quiz, med tre frågor, om gorillor */
function loadGorillaQ1() { 
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 1:\nDet finns mer än 2000 gorillor som lever i det vilda";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ1Wrong;
    secondButton.onclick = loadGorillaQ1Correct;

}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadGorillaQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "! Det finns bara runt 1100 gorillor i det vilda. :\nGorillan delas in i två arter; västlig och östlig gorilla.";

    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadGorillaQ2;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadGorillaQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar. :\nDet finns bara runt 1100 gorillor i det vilda. :\nGorillan delas in i två arter; västlig och östlig gorilla.";

    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadGorillaQ2;
    
    startButton.textContent = "Nästa fråga";
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

function loadGorillaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 2:\n"; 

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ2Correct;
    secondButton.onclick = loadGorillaQ2Wrong;
}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadGorillaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar:\n"; 

    startButton.textContent = "Nästa fråga";

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadGorillaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar:\n"; 
    
    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadGorillaQ3;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

function loadGorillaQ3() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 3:\n"; 

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ3Correct;
    secondButton.onclick = loadGorillaQ3Wrong;
}

/**Sida som visar att användaren har svarat rätt på fråga 1. */
function loadGorillaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt! Bravo:\n"; 

    startButton.textContent = "Pandans quiz";
    secondButton.textContent = "Klar";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.onclick = loadPanda;
    // secondButton.onclick = LÄNK TILL WWF
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadGorillaQ3Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel:\n"; 

    startButton.textContent = "Pandans quiz";
    secondButton.textContent = "Klar";

    startButton.onclick = loadPanda;
    secondButton.onclick = webWWF;


    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

function webWWF() {
    location.href = "https://www.wwf.se/stod/ge-en-gava/";
}

/*                        PANDA DELEN       */


/*Sida som låter användaren lär sig mer om pandan */
function loadPanda() { /*En knapp med texten "Starta quiz" */
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/pandaVideo.mp4");
    
    rubrikStart.textContent = "Pandan";
    textStartsida.textContent = "För att lära dig mer om pandan kommer du nu att få göra en quiz. \nDu kommer få ett påstående och väljer antingen \nSant eller Falskt";

    startButton.textContent = "Starta quiz";

    startButton.onclick = loadPandaQ1;
    
        // Gör knappen osynlig
    secondButton.classList.add("secondButton");
    
}

/**Sida som låter användaren göra en quiz, med tre frågor, om pandor */
function loadPandaQ1() { 
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 1:\nÄter en panda 30 kilo bambu/dag?";

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
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt! Bravo! :\nPandor spenderar faktiskt 10-16 timmar/dag på att äta :\noch sover upp till 12 timmar/dag.";

    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadPandaQ2;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 1. */
function loadPandaQ1Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar. :\nPandor spenderar faktiskt 10-16 timmar/dag på att äta :\noch sover upp till 12 timmar/dag.";
    
    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadPandaQ2;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/**Sida som visar fråga 2 för användaren. */
function loadPandaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 2:\nPanda Fråga nummer 2";

    // Fråga 2: Pandor kan klättra i träd, och de kan simma. (SANT)

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadPandaQ2Correct;
    secondButton.onclick = loadPandaQ2Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat rätt på fråga 2. */
function loadPandaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!:\n";
    
    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadPandaQ3;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 2. */
function loadPandaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar:\n.";

    startButton.textContent = "Nästa fråga";
    startButton.onclick = loadPandaQ3;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/**Sida som visar fråga 3 för användaren. */
function loadPandaQ3() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Fråga 3:\nPanda Fråga nummer 3";

    // Fråga 3: Pandor bajsar upp till 20 gånger om dagen. (FALSKT)

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadPandaQ3Correct;
    secondButton.onclick = loadPandaQ3Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat rätt på fråga 2. */
function loadPandaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!:\n";

    startButton.textContent = "Klar!";
    secondButton.textContent = "Gorillans quiz";

        // Pandor bajsar 40 gånger om dagen

    //startButton.onclick = loadPandaQuizQ3Correct; TACK OCH GODNATT, länk will WFF
    secondButton.onclick = loadGorilla;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat fel på fråga 2. */
function loadPandaQ3Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!";

    startButton.textContent = "Klar!";
    secondButton.textContent = "Gorillans quiz";
    secondButton.onclick = loadGorilla;
    //    Pandor bajsar 40 gånger om dagen

    //startButton.onclick = loadPandaQuizQ3Correct; TACK OCH GODNATT, länk will WFF
    
    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

function changeVideo(src) {
    const video = document.querySelector('video');
    video.src = src
}



