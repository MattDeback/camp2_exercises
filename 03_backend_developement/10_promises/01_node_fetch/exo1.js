const fetch = require("node-fetch");



function getResult () {

  return fetch(
    "https://decath-product-api.herokuapp.com/products/efe288cb-fb63-4b23-b8df-529f04b8b02b",
    {method: "GET"}
)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(`the title of this result is ${result.title}`)
    })

    .catch((error) => {
      console.warn(error);
    });
}

getResult();
