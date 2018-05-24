const fetch = require ("node-fetch");

function getCategories(){
  return fetch ("https://decath-product-api.herokuapp.com/categories")
    .then ((response) => response.json())
    //.then(myResult=>console.log(myResult))
    .then ((jsonResult)=>jsonresult.map(function getLabels(element) {
      return element.label;
    }));

    //.then (labels=>result.send(labels))

//getCategories()

module.exports={
  getCategories:getCategories
};
