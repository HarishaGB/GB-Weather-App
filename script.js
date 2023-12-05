

 /* async function checkWeather(){
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=884d43a36403199f0af764fa092ed909&units=metric`);
    var data = await res.json();

    console.log(data);
    // document.querySelector(".city").innerHTML = data.name;
    // document.querySelector(".temp").innerHTML = data.main.temp;
    // document.querySelector(".humidity").innerHTML = data.main.humidity;
    // document.querySelector(".wind").innerHTML = data.wind.speed;
}
checkWeather(); */

const apiKey = "884d43a36403199f0af764fa092ed909";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){ //if city name is wrong it gives error display
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();

        // console.log(data); //its only for if you want print details in inspect elements console otherwise not

        //its for searching the weather data (from browser console)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // its for image changes for diffrent weather conditions
        if(data.weather[0].main == "Clouds"){ 
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        // if city name is correct then display the weather information
        document.querySelector(".weather").style.display = "block"; 
        document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", ()=>{  // search btn click
    checkWeather(searchBox.value); // geving a city name
})
