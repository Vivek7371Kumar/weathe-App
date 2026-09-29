const searchBtn=document.getElementById("search-btn");
const cityname=document.getElementById("city-name");
const cityinput=document.getElementById("city-input");
const temperature = document.getElementById("temperature");
const description =document.getElementById("description");
const humidity =document.getElementById("humidity");
const wind = document.getElementById("wind");
 
const apikey="a3fed8c6b58097cb75512e09e348ecc1";

async function checkWeather(city){
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    


const response= await fetch(apiUrl);
const data= await response.json();

if(response.status===200) {
    cityname.innerHTML=data.name;
    temperature.innerHTML=Math.round(data.main.temp)+ "℃";
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = data.main.humidity ;
    wind.innerHTML = data.wind.speed ;
}

else{
    alert("city not found! plese enter a valid city name");

      }

}
searchBtn.addEventListener("click", function () {
    if(cityinput.value.trim() !== "") {
        checkWeather(cityinput.value);
    }
        else{
            alert("plese enter a city name first");
            
    }
} 
);
