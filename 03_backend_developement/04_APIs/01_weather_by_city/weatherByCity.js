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

getWeather("lille");

//module.exports = makeARequest;
