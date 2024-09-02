const apiKey = "42c92c6689ebc0394a6f183883fb2122";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



    async function checkWeather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      }
      else{
        var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "https://toppng.com/uploads/preview/three-clouds-and-sun-weather-icon-115330492569v76cfrkvl.png";
      }
      else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="https://toppng.com/uploads/preview/clouds-sun-and-rain-drops-weather-icon-115330395929z6pn6pvwa.png";
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="https://cdn-icons-png.freepik.com/512/7084/7084487.png";
      }

      document.querySelector(".weather").style.display = "block" ;
      document.querySelector(".error").style.display = "none";
      }
      
    }

      searchBtn.addEventListener("click" , ()=> {
        checkWeather(searchBox.value);
      })

    
