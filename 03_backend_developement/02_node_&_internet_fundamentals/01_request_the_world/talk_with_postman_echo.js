const request = require("request");


function simpleGet(Callback) {
  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function(error, response, result) {
       Callback(result);
    }
  );
}

simpleGet(myCallback);



function simpleGetWithParams(Callback) {
    request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result) {
      let temporary = JSON.parse(result);
      Callback(temporary.args);
    }
  );
}

function printFunction(args) {
console.log(args);
}

//simpleGetWithParams(printFunction);





function validateTimestamp(Callback) {
  request(
    {
      url: "https://postman-echo.com/time/valid?timestamp=" + dateFormatGiven,
      method: "GET"
    },
    function(error, response, result) {
       Callback(result);
    }
  );
  }


let date =  new Date();
let dateFormatGiven = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();


function printTime(result) {
console.log(result);
}


validateTimestamp(printTime);



module.exports = {
  simpleGet: simpleGet,
  simpleGetWithParams: simpleGetWithParams,
  validateTimestamp: validateTimestamp
}
