window.addEventListener("DOMContentLoaded", main);

/**Variabel som sparar namnet från inputfältet */
let userName = "";

/*kom ihåg att fördröja texten och knappen och låt videon spela ett par sekunder först*/ 
function main() {
    loadStartPage();
}

/** Syftet med funktionenStartsida som välkomnar användaren och ber denne fyll i sitt namn */
function loadStartPage() { 
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
function loadGorilla() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/gorillaVideo.mp4");

    rubrikStart.textContent = "Gorillan";
    textStartsida.textContent = "Okej " + userName + ", för att lära dig mer om pandan kommer du nu att få göra en quiz. \nDu kommer att få ett påstående där du väljer antingen \nSant eller Falskt";
    
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
    changeVideo("./Videos/gorillaVideo.mp4");

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\nDet finns mer än 2000 gorillor \nsom lever i det vilda";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ1Wrong;
    secondButton.onclick = loadGorillaQ1Correct;

}

/**Sida som visar att användaren har svarat rätt på påstående 1. */
function loadGorillaQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "! \nDet finns bara runt 1100 gorillor som lever i det vilda. Gorillan delas in i två arter; \nvästlig och östlig gorilla.";

    startButton.textContent = "Nästa";
    startButton.onclick = loadGorillaQ2;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på påstående 1. */
function loadGorillaQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar. \nDet finns bara runt 1100 gorillor i det vilda. Gorillan delas in i två arter; \nvästlig och östlig gorilla.";

    startButton.textContent = "Nästa påstående";
    startButton.onclick = loadGorillaQ2;
    
    startButton.textContent = "Nästa";
    
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
    p.textContent = "\nGorillor kan drabbas av samma sjukdomar \nsom vi människor"; 

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ2Correct;
    secondButton.onclick = loadGorillaQ2Wrong;
}

/**Sida som visar att användaren har svarat rätt på påstående 1. */
function loadGorillaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!\n Eftersom människor och gorillor delar\n 98% DNA, är gorillor mottagliga för samma sjukdomar som vi människor."; 

    startButton.textContent = "Nästa";
    startButton.onclick = loadGorillaQ3;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på påstående 1. */
function loadGorillaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Tyvärr, fel svar.\nEftersom människor och gorillor delar\n 98% DNA, är gorillor mottagliga för samma sjukdomar som vi människor.";
    
    startButton.textContent = "Nästa";
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
    p.textContent = "\nEn fullvuxen gorillahane kan väga upp till\n 150 kilo"; 

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadGorillaQ3Wrong;
    secondButton.onclick = loadGorillaQ3Correct;
}

/**Sida som visar att användaren har svarat rätt på påstående 1. */
function loadGorillaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\nRätt svar!\nEn fullvuxen hane kan faktiskt väga \nupp till 200kg"; 

    startButton.textContent = "Pandans quiz";
    secondButton.textContent = "Tack och hej!";

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

    startButton.onclick = loadPandaQ1;
    // secondButton.onclick = window.location.href = 'https://www.wwf.se/stod/ge-en-gava/';
}

/**Sida som visar att användaren har svarat fel på påstående 1. */
function loadGorillaQ3Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\nDet var tyvärr fel\nEn fullvuxen hane kan faktiskt väga \nupp till 200kg"; 

    startButton.textContent = "Pandans quiz";
    secondButton.textContent = "Tack och hej!";

    startButton.onclick = loadPandaQ1;
    // secondButton.onclick = window.location.href = 'https://www.wwf.se/stod/ge-en-gava/';

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

// function loadFromGorillaToPanda() {
//     const rubrikStart = document.getElementById("rubrik");
//     const textStartsida = document.getElementById("explainText");
//     const startButton = document.getElementById("btn-1");
//     const secondButton = document.getElementById("btn-2");
//     const p = document.createElement("quizText");

//     document.getElementById("explainText").innerHTML = "";

//     changeVideo("./Videos/pandaVideo.mp4");

//     rubrikStart.textContent = "Panda";
//     textStartsida.textContent = "Okej " + userName + ", för att lära dig mer om pandan kommer du nu att få göra en quiz. \nDu kommer att få ett påstående där du väljer antingen \nSant eller Falskt";
    
//     startButton.textContent = "Starta quiz";
//     startButton.onclick = loadPandaQ1;

//     // Gör knappen osynlig
//     secondButton.classList.add("secondButton");
// }

/*                        PANDA DELEN       */


/*Sida som låter användaren lär sig mer om pandan */
function loadPanda() { 
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/pandaVideo.mp4");
    
    rubrikStart.textContent = "Pandan";
    textStartsida.textContent = "Okej " + userName + ", för att lära dig mer om pandan kommer du nu att få göra en quiz. \nDu kommer att få ett påstående där du väljer antingen \nSant eller Falskt";

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
    changeVideo("./Videos/pandaVideo.mp4");    

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\n\nEn panda äter 30 kilo bambu/dag";

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadPandaQ1Correct;
    secondButton.onclick = loadPandaQ1Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");

}

/**Sida som visar att användaren har svarat rätt på påstående 1. */
function loadPandaQ1Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "!\nPandor spenderar faktiskt 10-16 timmar/dag \npå att äta och sover upp till \n12 timmar/dag.";

    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ2;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på påstående 1. */
function loadPandaQ1Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar.\nPandor spenderar faktiskt 10-16 timmar/dag \npå att äta och sover upp till \n12 timmar/dag.";
    
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ2;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/**Sida som visar påstående 2 för användaren. */
function loadPandaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\n\nPandor kan simma";

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadPandaQ2Correct;
    secondButton.onclick = loadPandaQ2Wrong;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat rätt på påstående 2. */
function loadPandaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!\nPandor kan simma och klättra i träd. \nEn panda som väger 130 kilo kan utan problem simma och klättra.";
    
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ3;

    // Gör knappen osynlig
    secondButton.classList.add("secondButton");
}

/**Sida som visar att användaren har svarat fel på påstående 2. */
function loadPandaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar.\nPandor kan både simma och klättra i träd. \nEn panda som väger 130 kilo kan utan problem simma och klättra.";

    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ3;
    
    // Gör knappen osynlig
    secondButton.classList.add("secondButton");

}

/**Sida som visar påstående 3 för användaren. */
function loadPandaQ3() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "\n\nPandor har tummar";

    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";

    startButton.onclick = loadPandaQ3Correct;
    secondButton.onclick = loadPandaQ3Correct;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

/**Sida som visar att användaren har svarat rätt på påstående 2. */
function loadPandaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";

    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar...nästan.\nPandor har ett speciellt ben i sin handled som fungerar som en tumme, så att de kan hålla i t.ex. grenar.";

    startButton.textContent = "Tack och hej!";
    secondButton.textContent = "Gorillans quiz";

    // startButton.onclick = location.href; "https://www.wwf.se/stod/ge-en-gava/";
    secondButton.onclick = loadGorillaQ1;

    // Gör knappen synlig
    secondButton.classList.remove("secondButton");
}

function changeVideo(src) {
    const video = document.querySelector('video');
    video.src = src
}



