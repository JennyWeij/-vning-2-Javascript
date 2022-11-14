/*function userName() {
    let name = document.getElementById("userName");
    alert(input);
}*/

let userName = "";

function startButton() {
    let userChoice = confirm ("Välkommen! Här kommer du att få lära dig om djuren och planeten. Vill du börja lära dig om planeten?");
    if (confirm("Då börjar vi med planeten!") == true) {
      } 
      else if (confirm("Då börjar vi med djuren!") == false) {
      } 
    let userName = prompt ("Vad heter du?");
    alert ("Välkommen " + userName + "! Nu börjar vi!") 

    //alert("Välkommen " + personChoice , "! Vill du börja med att lära dig om planeten eller djuren?") ;

}


