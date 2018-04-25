function getBrands( ){
    return fetch(
    `https://decath-product-api.herokuapp.com/`,
    {method: "GET"}
  )
  .then((response) => response.json());
}
const brandsPromise = getBrands( );
brandsPromise
  .catch(function(error){
     console.warn("error1: "+ error);
  })
  .then((brands) => {
     console.log("brands: "+ brands);
     return brands;
  })
  .catch(function(error){
     console.warn("error2: "+ error);
  })
  .then((result) => {
     console.log("result: "+ result);
     return result;
  })
