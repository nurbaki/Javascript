const emojis = ['🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🍍', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🍍'];

var sondurum = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];

var gizlikartlar= [];
var hafiza=[];
var hafizaindex1;
var hafizaindex2;
var tiksayisi=0;
var myNumber;
var acilmayan = 0;
var rekor =0;
var moves = 0;

const kartlar = document.querySelectorAll(".col");

// let myNumber = Math.ceil(Math.random()*20);

const kartlarikaristir = () => {
    gizlikartlar = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
    for (let index = 0; index < kartlar.length; index++) {
        myNumber = Math.ceil(Math.random()*15);
        if (gizlikartlar[myNumber] == "?") {
            gizlikartlar[myNumber] = emojis [index]; 
        }else{
            while (gizlikartlar[myNumber] != "?"){
                myNumber = (myNumber+1) % 16;
            };
            gizlikartlar[myNumber] = emojis [index];
        }
    }
}

const updateEkran = () => {
    document.querySelector(".hamle").textContent = moves;
    acilmayan = 0;
    for (let index = 0; index < kartlar.length; index++) {
        kartlar[index].innerHTML =  sondurum[index];
        
        if (sondurum[index] == "?"){
            acilmayan = acilmayan +1;
        }
    }
    if (acilmayan == 0) {
        document.querySelector(".ekran").textContent = "Congragulation!!";
        if (moves < rekor || rekor == 0) {
            rekor = moves;
            document.querySelector(".minhamle").textContent = rekor;
        }                 
    }else{
        document.querySelector(".ekran").textContent = "Let's Start";  
    }
}

kartlarikaristir();
console.log(gizlikartlar);
updateEkran();


document.querySelector(".baslat").onclick = () =>{
    kartlarikaristir();
    console.log(gizlikartlar);
    sondurum = ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?", "?"];
    tiksayisi=0;
    moves=0;
    updateEkran();
}


for (let index = 0; index < kartlar.length; index++) {
    kartlar[index].onclick = () => {
        if (sondurum[index] == "?") {

        tiksayisi = tiksayisi + 1;
        if (tiksayisi == 1) {
            sondurum[index] = gizlikartlar[index];
            updateEkran();
            hafiza = gizlikartlar[index];
            hafizaindex1 = index;
        }
        if (tiksayisi == 2) {

            sondurum[index] = gizlikartlar[index];
            moves += 1;
            updateEkran();
            hafizaindex2 = index;
                if (hafiza == gizlikartlar[index]){
                    tiksayisi=0;
                }
        }
        if (tiksayisi == 3) {
            sondurum[hafizaindex1] = ["?"];
            sondurum[hafizaindex2] = ["?"];
            tiksayisi=0;
            updateEkran();
        }
    }else return;

    }
};

