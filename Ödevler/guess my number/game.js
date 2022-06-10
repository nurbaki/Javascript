

let myNumber = ((Math.random()*100).toFixed(0)) % 21;
console.log(myNumber);
let hak = 10;
let Score1 =10;
let win = true;
let ScoreTop = 0;

const check = document.querySelector(".check");
const guessInput = document.querySelector(".guess");

const again = document.querySelector(".again");
const screen = document.querySelector(".number");
const score = document.querySelector(".score");
const topScore = document.querySelector(".top-score");
const mesage = document.querySelector(".msg");

again.onclick=function() {

    myNumber = ((Math.random()*100).toFixed(0)) % 21;
    console.log(myNumber);
    hak = 10;
    Score1 =10;
    win = true;

    screen.innerHTML = "?";
    score.innerHTML = Score1;
    mesage.innerHTML = "Hadi Baslayalim..";
    guessInput.value="";

    document.querySelector("body").style.backgroundColor= "#2d3436";

}

check.onclick=function() {

if (win) {

    hak = hak-1;
    console.log(hak);

    if (hak>=0) {

     Score1=hak;
        
     if (myNumber == guessInput.value) {
         mesage.innerHTML = "Tebrikler Kazandiniz";
         screen.innerHTML = myNumber;
         document.querySelector("body").style.backgroundColor= "green";
         win = false;

         if (Score1 > ScoreTop) {
            ScoreTop = Score1;
             topScore.innerHTML = ScoreTop;
         }
     }

     if (myNumber != guessInput.value && hak > 0){
       if (myNumber < guessInput.value) {
        mesage.innerHTML = "AZALT";
       }
       if (myNumber > guessInput.value) {
        mesage.innerHTML = "ARTIR";  
       }
     }
    } else {
        mesage.innerHTML = "Kaybettiniz. Tekrar Deneyin";
    }

    score.innerHTML = Score1;

 } else mesage.innerHTML = "Tekrar'a tikla. Yeniden oyna!!";

 }

 guessInput.onkeydown=(tuslar)=>{
    //* eger 13 e tusuna  (enter )basildiysa
    if(tuslar.keyCode===13){
        check.click();
    }
}