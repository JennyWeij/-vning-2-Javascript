window.addEventListener("DOMContentLoaded", main);

/**Variabel som sparar namnet från startsidans inputfält */
let userName = "";

function main() {
    loadStartPage();
}

/** Startsida som välkomnar användaren och berättar vad som kommer att hända, 
 * ber även användaren att fylla i sitt namn */
function loadStartPage() { 
    const rubrikStart = document.getElementById("rubrik");
    const myInputField = document.getElementById("userName");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");

    rubrikStart.textContent = "Välkommen till PlanetEn!";
    textStartsida.textContent = "Här kommer du att få lära dig om två stycken spännande djur. \nFyll i ditt namn och klicka på knappen så kör vi igång!";
    
    startButton.textContent = "Nu kör vi!";
    startButton.onclick = loadGorillaOrPanda;

    startButton.onclick = function() {
        userName = myInputField.value 
        loadGorillaOrPanda();
    }

}

/** Sida som välkomnar användaren med tidigare ifyllt namn, sidan låter användaren 
 * välja mellan att antingen börja lära sig mer om gorillan eller pandan */
function loadGorillaOrPanda() { 
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    
    document.getElementById("myInputField").style.display = "none";
    
    rubrikStart.textContent = "Välkommen " + userName + "!"; 
    textStartsida.textContent = "Du ska få lära dig mer om två mycket spännande djur;\n pandor och gorillor. \nVilken av dem vill du börja lära dig om?";
    
    secondButton.classList.remove("secondButton");
    startButton.textContent = "Gorilla";
    startButton.onclick = loadGorilla;
    secondButton.textContent = "Panda";
    secondButton.onclick = loadPanda;

}

/**Funktion som ändrar sidans bakgrundsvideo */
function changeVideo(src) {
    const video = document.querySelector('video');
    video.src = src
}

/** Sida som presenterar en quiz om gorillor, som innehåller tre påståenden, 
 * där användaren får välja mellan Sant och Falskt */
function loadGorilla() {
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/gorillaVideo.mp4");

    rubrikStart.textContent = "Gorillan";
    textStartsida.textContent = "Okej " + userName + ", \nför att lära dig mer om gorillan kommer du nu att få göra en quiz. \nDu kommer att få tre påståenden där du väljer antingen \nSant eller Falskt";
    
    secondButton.classList.add("secondButton");
    startButton.textContent = "Starta quiz";
    startButton.onclick = loadGorillaQ1;

}

/** Sida som presenterar det första påståendet, där användaren får välja mellan Sant och Falskt */
function loadGorillaQ1() { 
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";
    changeVideo("./Videos/gorillaVideo.mp4");

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\nDet finns mer än 2000 bergsgorillor \nsom lever i det vilda";

    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadGorillaQ1Wrong;
    secondButton.onclick = loadGorillaQ1Correct;

}

/**Sida som visar att användaren har svarat rätt på det första påståendet. 
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadGorillaQ1Correct() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "! Det finns bara runt 1100 bergsgorillor i det vilda. Gorillan delas in i två arter; västlig och östlig gorilla med bergsgorillan som underart.";
    
    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadGorillaQ2;
}

/**Sida som visar att användaren har svarat fel på det första påståendet.
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadGorillaQ1Wrong() {
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Tyvärr, fel svar, " + userName + ". Det finns bara runt 1100 bergsgorillor i det vilda. Gorillan delas in i två arter; västlig och östlig gorilla med bergsgorillan som underart.";

    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa påstående";
    startButton.onclick = loadGorillaQ2;
    startButton.textContent = "Nästa";

}

/** Sida som presenterar det andra påståendet, användaren får välja mellan Sant och Falskt */
function loadGorillaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\nGorillor kan drabbas av samma sjukdomar \nsom vi människor"; 

    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadGorillaQ2Correct;
    secondButton.onclick = loadGorillaQ2Wrong;
}

/**Sida som visar att användaren har svarat rätt på det andra påståendet.
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadGorillaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "!\n Eftersom människor och gorillor delar\n 98% DNA, är gorillor mottagliga för samma sjukdomar som vi människor."; 

    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadGorillaQ3;
}

/**Sida som visar att användaren har svarat fel på det andra påståendet.
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadGorillaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Tyvärr, fel svar " + userName + ".\nEftersom människor och gorillor delar\n 98% DNA, är gorillor mottagliga för samma sjukdomar som vi människor.";
    
    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadGorillaQ3;

}

/** Sida som presenterar det tredje och sista påståendet, användaren får välja mellan Sant och Falskt */
function loadGorillaQ3() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\nEn fullvuxen gorillahane kan väga upp till\n 150 kilo"; 

    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadGorillaQ3Wrong;
    secondButton.onclick = loadGorillaQ3Correct;
}

/**Sida som visar att användaren har svarat rätt på det tredje och sista påståendet. 
 * Användaren får välja mellan att göra om gorillans quiz eller göra pandans quiz */
function loadGorillaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar!\nEn fullvuxen hane kan faktiskt väga \nända upp till 200 kg. \nBra jobbat, " + userName + "!"; 

    secondButton.classList.remove("secondButton");
    startButton.textContent = "En gång till";
    secondButton.textContent = "Pandans quiz";
    startButton.onclick = loadGorillaQ1;
    secondButton.onclick = loadPandaQ1;
}

/**Sida som visar att användaren har svarat fel på det tredje och sista påståendet. 
 * Användaren får välja mellan att göra om gorillans quiz eller göra pandans quiz */
function loadGorillaQ3Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar, " + userName + ".\nEn fullvuxen hane kan faktiskt väga \nända upp till 200 kg. \nBra jobbat, " + userName + "!"; 

    secondButton.classList.remove("secondButton");
    startButton.textContent = "En gång till";
    secondButton.textContent = "Pandans quiz";
    startButton.onclick = loadGorillaQ1;
    secondButton.onclick = loadPandaQ1;

}

/**PANDA-DELEN*/

/** Sida som presenterar en quiz om pandor, som innehåller tre påståenden, 
 * där användaren får välja mellan Sant och Falskt */
function loadPanda() { 
    const rubrikStart = document.getElementById("rubrik");
    const textStartsida = document.getElementById("explainText");
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");

    changeVideo("./Videos/pandaVideo.mp4");
    
    rubrikStart.textContent = "Pandan";
    textStartsida.textContent = "Okej " + userName + ", \nför att lära dig mer om pandan kommer du nu att få göra en quiz. \nDu kommer att få tre påståenden där du väljer antingen \nSant eller Falskt";

    secondButton.classList.add("secondButton");
    startButton.textContent = "Starta quiz";
    startButton.onclick = loadPandaQ1;
    
}

/** Sida som presenterar det första påståendet, användaren får välja mellan Sant och Falskt */
function loadPandaQ1() { 
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";
    changeVideo("./Videos/pandaVideo.mp4");    

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\n\nEn panda äter 30 kilo bambu/dag";
    
    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadPandaQ1Correct;
    secondButton.onclick = loadPandaQ1Wrong;

}

/**Sida som visar att användaren har svarat rätt på det första påståendet. 
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadPandaQ1Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "!\nPandor spenderar faktiskt 10-16 timmar/dag \npå att äta och sover upp till \n12 timmar/dag.";

    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ2;
}

/**Sida som visar att användaren har svarat fel på det första påståendet.
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadPandaQ1Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar, " + userName + "!\nPandor spenderar faktiskt 10-16 timmar/dag \npå att äta och sover upp till \n12 timmar/dag.";
    
    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ2;

}

/** Sida som presenterar det andra påståendet, användaren får välja mellan Sant och Falskt */
function loadPandaQ2() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\n\nPandor kan simma";

    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadPandaQ2Correct;
    secondButton.onclick = loadPandaQ2Wrong;
}

/**Sida som visar att användaren har svarat rätt på det andra påståendet. 
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadPandaQ2Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar, " + userName + "!\nPandor kan simma och klättra i träd. \nEn panda som väger 130 kilo kan utan problem simma och klättra.";
    
    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ3;
}

/**Sida som visar att användaren har svarat fel på det andra påståendet. 
 * Ber användaren att klicka sig vidare till nästa påstående */
function loadPandaQ2Wrong() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Det var tyvärr fel svar, " + userName + ".\nPandor kan både simma och klättra i träd. \nEn panda som väger 130 kilo kan utan problem simma och klättra.";

    secondButton.classList.add("secondButton");
    startButton.textContent = "Nästa";
    startButton.onclick = loadPandaQ3;

}

/** Sida som presenterar det tredje och sista påståendet, användaren får välja mellan Sant och Falskt */
function loadPandaQ3() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "\n\nPandor har tummar";

    secondButton.classList.remove("secondButton");
    startButton.textContent = "Sant";
    secondButton.textContent = "Falskt";
    startButton.onclick = loadPandaQ3Correct;
    secondButton.onclick = loadPandaQ3Correct;
}

/**Sida som visar att användaren har svarat nästan rätt på det tredje och sista påståendet. 
 * Användaren får välja mellan att göra om gorillans quiz eller göra pandans quiz */
function loadPandaQ3Correct() {
    const startButton = document.getElementById("btn-1");
    const secondButton = document.getElementById("btn-2");
    const p = document.createElement("quizText");

    p.classList = "explainText";

    document.getElementById("textBox").innerHTML = "";
    document.getElementById("textBox").append(p);
    p.textContent = "Rätt svar...nästan.\nPandor har ett speciellt ben i sin handled som fungerar som en tumme, så att de kan hålla i t.ex. grenar. Bra jobbat, " + userName + "!";

    secondButton.classList.remove("secondButton");
    startButton.textContent = "En gång till";
    secondButton.textContent = "Gorillans quiz";
    startButton.onclick = loadPandaQ1;
    secondButton.onclick = loadGorillaQ1;
}
