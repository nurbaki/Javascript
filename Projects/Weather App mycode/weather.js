//****** Weather App ******//


const nurbakisKey = "e0bbe5264c021364f1aa74b60809bcd0";

const cityInput = document.querySelector("#inputcity");

const submitBtn = document.querySelector("#submitbtn");

const iconImage = ["./img/1-clear.jpg", "./img/2-few.jpg", "./img/3-scatt.jpg", "./img/4-broken.jpg",
"./img/5-shower.jpg", "./img/6-rain.jpg", "./img/7-thunderstorm.jpg", "./img/8-snow.jpeg", "./img/9-mist.jpg", 
"./img/1-clear.jpg", "./img/2-few.jpg", "./img/3-scatt.jpg", "./img/4-broken.jpg",
"./img/5-shower.jpg", "./img/6-rain.jpg", "./img/7-thunderstorm.jpg", "./img/8-snow.jpeg", "./img/9-mist.jpg"];
 
const iconArray = ["01d", "02d", "03d", "04d", "09d", "10d", "11d", "13d", "50d",
 "01n", "02n", "03n", "04n", "09n", "10n", "11n", "13n", "50n"];



async function getAllWeatherRep(cityName){

const res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${nurbakisKey}&units=metric`);

    if (!res.ok) {
    
        document.querySelector(".msg").innerHTML=`<h2>Enter a correct city name</h2>`
    
        throw new Error("There is a Error!!");

    }
    
    const data = await res.json();

    console.log(data);
    
    displayScreen(data);
    
};

const iconFind = (iconData) =>{
 
    for (const key in iconArray) {
        if (iconArray[key] == iconData) {
            return iconImage[key];
        }
    };
};

const displayScreen = (cityData)=>{

    let icon = iconFind(cityData.weather[0].icon);
    console.log(icon);

    document.querySelector(".cities").innerHTML +=
    `<div class="card text-center" style="width: 12rem;">
        <h2 class="city-name" data-name="${cityData.name}, ${cityData.sys.country}">
            <span>${cityData.name}</span>
            <sup>${cityData.sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(cityData.main.temp)}<sup>°C</sup></div>
        <figure>
            <img class="city-icon" src="${icon}">
            <figcaption>${cityData.weather[0].description}</figcaption>
        </figure>
        </div>
    `
};


submitBtn.onclick = () => {
    city = cityInput.value;
    getAllWeatherRep(city);
    cityInput.focus();   
    console.log(city);   
};
 




