const request = require("request");

function getWeather(city) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,

      method: "GET"
    },

    function(error, response, result) {
      const weather = JSON.parse(result);
      console.log(`${weather.main.temp}°C`);
    }
  );
}

getWeather("bogota");



function getWeatherGPS(lat, lon) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,

      method: "GET"
    },

    function(error, response, result) {
      const weatherGPS = JSON.parse(result);
      console.log(`${weatherGPS.main.temp}°C`);
    }
  );
}

//getWeatherGPS(40, 45);

function getWeatherPostalCode(zipCode, country) {
  request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,

      method: "GET"
    },

    function(error, response, result) {
      const weatherPostalCode = JSON.parse(result);
      console.log(`${weatherPostalCode.main.temp}°C`);
    }
  );
}

//getWeatherPostalCode(59190, "fr");
