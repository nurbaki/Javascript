
// DOM ÖDEV

const Title = document.querySelector("h1");

Title.style.color="red";
Title.style.textAlign="center";

const foto= document.querySelector("img");

foto.onmouseover=()=>{
    foto.src="img/aslan1.jpeg";
}
foto.onmouseout=()=>{
    foto.src="img/aslan2.jpeg";
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

const ara = document.querySelector(".btn-outline-warning");

const sound = document.querySelector(".ses");

ara.onclick=()=>{
    foto.src="img/img.gif";
    // sound.load(); sayfa yuklendiginde hazir olsun anlaminda load. suan gerek yok
    sound.volume=0.2;
    sound.play();
}

// 2.Yol
// resim.addEventListener("mouseout", () => {
//     resim.src = "./img/aslan2.jpeg";
//   });

const check= document.querySelector(".checkbox");
const text = document.querySelector(".textbox");

text.onkeyup=()=>{
    if(check.checked){
        text.value =text.value.toUpperCase();
    }else{
        text.value =text.value.toLowerCase();
    }
}

//*ekle butonuna basıldığında inputa girilen değerler benim ul listeme eklensin

document.querySelector(".ekle").onclick=()=>{
    const liste = document.querySelector(".liste");
    const language = document.querySelector(".language");
  
    liste.innerHTML = liste.innerHTML + `<li>${language.value} </li>`;
  
    //*input girişi yapılıp eleman üstte listeye eklendikten sonra input temizlensin
    language.value = "";
  



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
  const liste = document.querySelector(".liste");
  
  liste.removeChild(liste.lastElementChild);//*listenin son elemanını sil
  // liste.removeChild(liste.firstElementChild);//*listenin ilk elemanını sil
  
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
const liste = document.querySelector(".liste"); //h1 eklemek için class=input-div yerine class=forH1 yapabilirsin
// const h1 = document.createElement("h1");
// const yazi = document.createTextNode("Programlama Dilleri");
// h1.appendChild(yazi);
// inputDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.

//!kısa yol

liste.innerHTML = `<h1> ${"Programlama Dilleri"}</h1>` +liste.innerHTML;