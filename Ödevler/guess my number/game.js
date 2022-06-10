

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




// derste yapilan

// //* ============================================================
// //*  GUESS MY NUMBER
// //*  Game Logic
// //* ============================================================

// //? PC  1-20 arasında rastgele bir sayı hesaplasın
// let randomNumber = Math.ceil(Math.random()*20);
// console.log(randomNumber);

// //?selectors

// const again=document.querySelector(".again");
// const check=document.querySelector(".check");
// const msg=document.querySelector(".msg");

// //?Variables
// let score=10;

// //****************************** */
// // let topScore=0;
// //****************************** */

// //!ekrandaki en yüksek puan güncelle
// //!local storage den

// //!local storage de değişken oluşturun
//   let topScore=  localStorage.getItem("topScore")
// document.querySelector(".top-score").textContent=topScore;


// //?check butonu tıklandığında

// check.onclick=()=>{

// const guess=document.querySelector(".guess").value;



// //?sayı girilmeden check e basılırsa uyarı versin

// if(!guess){
//   msg.textContent = "Please Enter Your Guess";
  
//   //?eğer tahmin doğruysa
// }else if(guess==randomNumber){

// msg.textContent="Congrulations 🎉";
// document.querySelector("body").style.backgroundColor="green";
// document.querySelector(".number").textContent=randomNumber;
// if(score>topScore)

// localStorage.setItem("topScore",score)
// {
//   //****************************** */
//   // topScore=score;
//   //****************************** */
//   document.querySelector(".top-score").textContent = score;
// }
// }
// else{

// //?eğer tahmin yanlışsa
// if(score>1)
// {score--;

// guess < randomNumber? (msg.textContent = "📈 Arttır"): (msg.textContent = "📉 Azalt");
//  document.querySelector(".score").textContent = score;

// }else{
//  msg.textContent="Sorry you lost!😞"
//  document.querySelector(".score").textContent=0;
// }
// }}

// //? Again butonuna basıldığında

// again.onclick = ()=>{
// randomNumber = Math.ceil(Math.random() * 20);
// console.log(randomNumber);

// score=10;
// document.querySelector(".score").textContent = score;
// document.querySelector(".number").textContent="?";
// document.querySelector("body").style.backgroundColor = "#2d3436";
// msg.textContent="Starting...."
// document.querySelector(".guess").value="";

// }