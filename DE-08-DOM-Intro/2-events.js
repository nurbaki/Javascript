//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//  uzun yol yani her seferinde queryselector ile cagirilarak yapilir

document.querySelector(".H1").onmouseover =() =>{

    document.querySelector(".H1").style.color="red";
}


//  kisa yol degiskene atama yapilir, degisken cagirilarak yapilir
const baslik = document.querySelector(".H1");

baslik.onmouseout=()=>{
    baslik.style.color="blue";
}


//* EXAMPLE-2 (onclick )
//* -------------------------------------------------------

const birinci= document.querySelector(".bir");

birinci.onclick=()=>{
    birinci.src="./img/logo2.png";
    document.querySelector(".iki").src="./img/js_logo.png";
}


//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------

//* <h1 class="header" onmouseover="style.color='black'" onmouseout="style.color='blue'">DOM Temelleri</h1> 



//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//*  <h1 class="H1" onmouseover=black() onmouseout=blue()>DOM Basics
//</h1>   HTML bu sayfaya script tag ini yazmamiz lazim.
//JAVASCRİPT
const header = document.querySelector(".H1");
const blue = () => (header.style.color = "blue");
const black = () => (header.style.color = "black");


// * -------------------------------------------------------
// * EXAMPLE-3 (Button onclick)
// * -------------------------------------------------------

const buton=document.querySelector("#btn")

buton.onclick=()=>{

document.querySelector("body").style.backgroundImage="linear-gradient(to right,purple,gray)"

buton.textContent="SEARCH"
buton.style.fontSize="30px"
}

// ? METHOD-4 (ONLY JAVASCRIPT - addEventListener())
// ?---------------------------------------------------------------

// const buton = document.querySelector("#btn");

// buton.addEventListener("click", () => {
//   document.querySelector("body").style.backgroundImage =
//     "linear-gradient(to right,purple,gray)";

//   buton.textContent = "SEARCH";
//   buton.style.fontSize = "30px";
// });

