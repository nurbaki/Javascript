
// DOM ÖDEV

const Title = document.querySelector("h1");

Title.style.color="Blue";
Title.style.textAlign="center";
Title.style.marginTop="20px";

const foto= document.querySelector("img");

var lion = 0;

foto.onmouseover=()=>{
    foto.src="img/aslan1.jpeg";
    lion=1;
}
foto.onmouseout=()=>{
    if (lion == 1) {
        foto.src="img/aslan2.jpeg";
    }
    
}

foto.onclick=()=>{
    foto.src="img/img2.jpg";
    sound.pause();
    lion=0;
}

const ara = document.querySelector(".btn-outline-warning");
const sound = document.querySelector(".ses");

ara.onclick=()=>{
    foto.src="img/img.gif";
    // sound.load(); sayfa yuklendiginde hazir olsun anlaminda load. suan gerek yok
    sound.volume=0.2;
    sound.play();
}

const baglat = document.querySelector(".btn-outline-primary");

baglat.onclick=()=>{
    foto.src="img/telbagla.gif";
    sound.pause();
}

const konus = document.querySelector(".btn-outline-danger");

konus.onclick=()=>{
    foto.src="img/telefon.gif";
    sound.pause();
    
}

// 2.Yol
// resim.addEventListener("mouseout", () => {
//     resim.src = "./img/aslan2.jpeg";
//   });


// ************ 2. Section **************

const check= document.querySelector(".checkbox");
const text = document.querySelector(".textbox");

check.onclick=()=>{
    if(check.checked){
        text.value =text.value.toUpperCase();
    }else{
        text.value =text.value.toLowerCase();
    }
}

text.onkeyup=()=>{
    if(check.checked){
        text.value =text.value.toUpperCase();
    }else{
        text.value =text.value.toLowerCase();
    }
}



// ***************** 3. Section ***********************

//*ekle butonuna basıldığında inputa girilen değerler benim ul listeme eklensin

const liste = document.querySelector(".liste");
const language = document.querySelector(".language");

document.querySelector(".ekle").onclick=()=>{

    if (language.value != "") {
        liste.innerHTML = liste.innerHTML + `<li>${language.value} </li>`;
  
        //*input girişi yapılıp eleman üstte listeye eklendikten sonra input temizlensin
        language.value = "";        
    }
  

  



  //*UZUN YOL
    // yeni girilen satiri saklamak icin bir li olusturduk.
    // const yeniLi = document.createElement("li");
    // yeni li icin textnode olusturduk
    // const textNode = document.createTextNode(satir.value);
    //olusturdugumuz texnode'u yeni li'ye bagladik.
    // yeniLi.appendChild(textNode);
    // yeni eklenen satiri var olan listeye (ul) baglayalim.
    // liste.appendChild(yeniLi);
  }
  

  //*sil butonu tıklandığında
  
  document.querySelector(".sil").onclick = ()=>{
  //const liste = document.querySelector(".liste");
  
    if (liste.lastElementChild != liste.firstElementChild) {
         liste.removeChild(liste.lastElementChild);//*listenin son elemanını sil
        //liste.removeChild(liste.firstElementChild);//*listenin ilk elemanını sil   
    }
  }

document.querySelector(".language").onkeydown=(tuslar)=>{
    //* eger 13 e tusuna basildiysa

    if(tuslar.keyCode===13){
        document.querySelector(".ekle").click();
    }

// eger delete = 46 basildiysa sil butonu tetiklensin

    if(tuslar.keyCode===46){
        document.querySelector(".sil").click();
    }

}

//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
//const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// inputDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1> ${"Programlama Dilleri"}</h1>` +liste.innerHTML;

document.querySelector(".input-div").innerHTML = `<h1 class="text-danger"> ${"Upper / Lower Box"}</h1>` +document.querySelector(".input-div").innerHTML;