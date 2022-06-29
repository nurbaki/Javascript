
const codeInput = document.querySelector(".form-control");

const findBtn = document.querySelector(".btn-info");

async function allCountrys(){

    const res = await fetch ("https://restcountries.com/v3.1/all");
    
    // console.log(res);
    
    if (!res.ok) {
    
        document.querySelector(".countries").innerHTML=`<h2>Something went wrong: ${res.status}</h2>`
    
        throw new Error("Hata var");
    }    
    
    const dataList = await res.json();
    
    console.log(dataList);

    listeOlustur(dataList); 
};

const listeOlustur = (countryArray)=>{

    for (let key in countryArray) {
        document.querySelector("#datalistOptions").innerHTML += `<option value= ${countryArray[key].cca2} ></option>`
        document.querySelector("#datalistOptions").innerHTML += `<option value= ${countryArray[key].cca3} ></option>`   
    }
}
    


async function getirCountry(countryCode){

const res = await fetch (`https://restcountries.com/v2/alpha/${countryCode}`);

// console.log(res);

if (!res.ok) {

    document.querySelector(".countries").innerHTML=`<h2>Something went wrong: ${res.status}</h2>`

    throw new Error("Hata var");
}

const data = await res.json();

displayScreen(data);

};

const displayScreen = (country)=>{
    console.log(country);
    document.querySelector(".countries").innerHTML=     
    `<div class="card text-start w-50 shadow-lg bg-light">
      <img src=${country.flags.svg} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${country.name}</h5>
        <p class="card-text">${country.altSpellings[2]}</p>
        </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${country.capital}</li>
        <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values (country.languages)[0].name} </li>
        <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values (country.currencies)[0].name} ,
        ${Object.values (country.currencies)[0].symbol}</li>
      </ul>
    </div>`;    
};

allCountrys();

findBtn.onclick = () => {
    let text1 = codeInput.value;
    getirCountry(text1);
    findVowel(text1);
    codeInput.focus();   
    console.log(codeInput.value);   
};
