
let temp = document.getElementById("temp");
let cityname = document.getElementById("city");
let weatherName = document.getElementById("weatherName");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let tempImg = document.getElementById("tempImg");
let input = document.getElementById('input');
let searchBtn = document.getElementById('search');
let loader =document.querySelector('.loader');
let weatherBox = document.querySelector('.weatherBox');
let error = document.querySelector('.error');
let card = document.querySelector('.card');

    const apiKey = "e4a66c6d148b07d84a50fe33f3f74c62";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
    if(response.status == 400 || response.status == 404 ){
        loader.style.display = "None";
        weatherBox.style.display ="None";
        error.style.display = "Block";

    }else{
        loader.style.display = "None";
        var data = await response.json();
            console.log(data);
    
            temp.innerHTML= data.main.temp + "°C";
            cityname.innerHTML= data.name;
            weatherName.innerHTML = data.weather[0].description;
            humidity.innerHTML= data.main.humidity + "%";
            wind.innerHTML= data.wind.speed;

            if(data.weather[0].main == "Smoke"){
                tempImg.src="media/smoke.png"
                card.style.backgroundImage = "url('media/smokeBg.png')"
            }else if(data.weather[0].main == "Clear"){
                tempImg.src="media/clear.png"
                card.style.backgroundImage = "url('media/clearBg.png')"
            }else if(data.weather[0].main == "Clouds"){
                tempImg.src="media/clouds.png"
                card.style.backgroundImage = "url('media/cloudsBg.png')"
            }else if(data.weather[0].main == "Drizzle"){
                tempImg.src="media/drizzle.png"
                card.style.backgroundImage = "url('media/drizzleBg.png')"
            }else if(data.weather[0].main == "Mist"){
                tempImg.src="media/mist.png"
                card.style.backgroundImage = "url('media/mistBg.png')"
            }else if(data.weather[0].main == "Rain"){
                tempImg.src="media/rain.gif"
                card.style.backgroundImage = "url('media/rainBg.png')"
            }else if(data.weather[0].main == "Snow"){
                tempImg.src="media/snow.gif"
                card.style.backgroundImage = "url('media/snowBg.png')"
            }else{
                tempImg.src="media/clouds.png"
            }

            document.querySelector('.weatherBox').style.display ="Block"
            document.querySelector('.error').style.display = "None";

        };
        
    }
        
        searchBtn.addEventListener('click',()=>{
            error.style.display = "None";
            document.querySelector('.weatherBox').style.display ="None"
            loader.style.display = "Block";
                checkWeather(input.value);
        });


    

   