

let myNumber = ((Math.random()*100).toFixed(0)) % 21;

// let myNumber = Math.ceil(Math.random()*20); Bu matematiksel olarak daha dogru


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


// tekrar tusuna basilirsa
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

//kontrol et butonuna basildiginda

check.onclick=function() {

    // oyundan sonra da tiklanmasi durumuna karsi, zaten kazanip kazanmadigini kontrol et
if (win) {

    hak = hak-1; // hakkimiz 10. her tiklandiginda  1 dussun
    console.log(hak);

    if (hak>=0) {  // hala hakkimiz kaldiysa

     Score1=hak;
        
     // eger dogru tahmin edildiyse
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
    // eger yanlis tahmin edildi ve hala hakkimiz varsa
     if (myNumber != guessInput.value && hak > 0){
       if (myNumber < guessInput.value) {
        mesage.innerHTML = "AZALT";
       }
       if (myNumber > guessInput.value) {
        mesage.innerHTML = "ARTIR";  
       }
     }
    } else {
        mesage.innerHTML = "Kaybettiniz. Tekrar Deneyin"; // hakkimiz kalmadiysa
    }

    score.innerHTML = Score1;

 } else mesage.innerHTML = "Tekrar'a tikla. Yeniden oyna!!"; // oyun bittigi halde, kontrol et e tiklanirsa

 }

 // tiklamadan, enter a basarak oynamak icin
 guessInput.onkeydown=(tuslar)=>{
    //* eger 13 e tusuna  (enter )basildiysa
    if(tuslar.keyCode===13){
        check.click();
    }
}