const fetch = require("node-fetch");

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="


function getPosts() {
  return fetch(url + "neiltyson", process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, {
    method: "POST",
    body: JSON.stringify({
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    }})
  });
}
