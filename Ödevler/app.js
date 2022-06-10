

const Tus1= document.querySelector(".tus1");

Tus1.onclick=()=>{
    document.querySelector(".nota1").play();
}

const Tus2= document.querySelector(".tus2");
Tus2.onclick=()=>{
    document.querySelector(".nota2").play();
}
const Tus3= document.querySelector(".tus3");
Tus3.onclick=()=>{
    document.querySelector(".nota3").play();
}

const Tus4 = document.querySelector(".tus4");
Tus4.onclick=()=>{
    document.querySelector(".nota4").play();
}

const Tus5 = document.querySelector(".tus5");
Tus5.onclick=()=>{
    document.querySelector(".nota5").play();
}

const Tus6 = document.querySelector(".tus6");
Tus6.onclick=()=>{
    document.querySelector(".nota6").play();
}

const Tus7 = document.querySelector(".tus7");
Tus7.onclick=()=>{
    document.querySelector(".nota7").play();
}
const Tus8 = document.querySelector(".tus8");
Tus8.onclick=()=>{
    document.querySelector(".nota8").play();
}


onkeydown=(tuslar)=>{

    switch (tuslar.keycode) {
        case 65:
            //65= a harfi
            // document.querySelector(".nota1").play();
            document.querySelector(".nota1").click();         
            break;
            case 83:
                //s harfi
                document.querySelector(".nota2").play();         
                break;
    
        default:
            break;
    }
}



// document.querySelector(".language").onkeydown=(tuslar)=>{
//     //* eger 13 e tusuna basildiysa

//     if(tuslar.keyCode===13){
//         document.querySelector(".ekle").click();
//     }


    // Tus1.audio.play();
    // sound.load(); sayfa yuklendiginde hazir olsun anlaminda load. suan gerek yok
    // sound.volume=0.2;
    // sound.play();