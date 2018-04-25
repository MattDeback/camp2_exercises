const fetch = require("node-fetch");


function weatherByCity(city) {
fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,
    {method: "GET"}
)
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp} °C`);
      weatherByGps(40, 45)
    })
    .catch((error) => {
      console.warn(error);
    })
}

weatherByCity("Paris");



function weatherByGps(lat, lon) {
fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1a732d58cdcd372ec213ec6c8cda05a1`,
    {method: "GET"}
)
    .then((response) => response.json())
    .then((result) => {
      console.log(`${result.main.temp} °C`);
    })
    .catch((error) => {
      console.warn(error);
    })
}

//weatherByGps(40, 45);
