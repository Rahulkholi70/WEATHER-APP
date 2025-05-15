const apiKey = "a1428a4483816c91fa153961fda5df4e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srchBox = document.querySelector(".srchBox input");
const srchbtn = document.querySelector(".srchBox button");
const weatherIcon = document.querySelector(".weatherimg");
async function checkWeather(city) {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await res.json();

  console.log(data);
  
  document.querySelector(".cityName").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "KM/HR";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/sun.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rainy.png";
  }else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src = "img/cloudy.png";
  }else if(data.weather[0].main == 'Mist'){
    weatherIcon.src = "img/fog.png";
  }else if(data.weather[0].main == 'Fog'){
    weatherIcon.src = "img/fog.png";
  }else if(data.weather[0].main == 'Thunderstorm'){
    weatherIcon.src = "img/storm.png";
  }
}

srchbtn.addEventListener("click", () => {
  checkWeather(srchBox.value);
  // checkWeather("Delhi");
});
