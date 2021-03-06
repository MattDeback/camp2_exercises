const OAuth = require("OAuth");
const request = require("request")

const oauth = new OAuth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET
  , "1.0A", null, "HMAC-SHA1"
);


// Put the express, port and OAuth initialization here...

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";

// Again, replace string by your credentials.
oauth.get(url + "neiltyson", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  // Do something with data...
  if (error) {
    console.log(error);
  }
  else {
    const text = JSON.parse(data)
    const textClean = text.map(function(objTweet) {
      return objTweet.text;
    })
    console.log(textClean);
  }
});


const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url = process.env.WATSON_URL;
const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

//const text = "INSERT HERE A PART FROM YOUR FAVORITE ENGLISH SONG";
const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

request({ url: uri, headers: { "Authorization": auth } }, function (error, response, body) {
  // Manipulate data here...
});

console.log(body)
