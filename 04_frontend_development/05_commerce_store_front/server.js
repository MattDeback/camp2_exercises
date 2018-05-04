const fetch = require("node-fetch");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const nunjucks = require("nunjucks")

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.listen(port, function () {
 console.log("Server listening on port:" + port);
});


app.get("/", function getCategories(request, result) {
 fetch (
   `https://decath-product-api.herokuapp.com/categories`,
   {method:"GET"}
 )
 .then (resultat=>resultat.json())
 .then (jsonResult=>jsonResult.map(function getElementLabel(element){
   return element.label;
 }))
 .then (labels=>result.render("home", {myLabels:labels}))
 .catch(error=>console.log(error));
});
