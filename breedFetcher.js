
const request = require('request');


const fetchBreedDescription = function (breedName, callback) {
  
  const link = 'https://api.thecatapi.com/v1/breeds/search?q=';

  const searchLink = link + breedName;

  request(searchLink, (error, response, body) => {
    if (error) {
      callback(error, null); // Print the error if one occurred
    } else {
      const data = JSON.parse(body);

      if (data.length === 0) {

        callback('Breed name is not found', null);  //index(error,desc)
        
      } else {
        const descr= data[0]['description']
        callback(null, descr)
      }
    } 
    // const data = JSON.parse(body);
    //console.log(data);
    //console.log(data[0]['description']);
    //console.log(typeof data);
    //callback(body);  
    // Print the HTML for the Google homepage.
  });

}


module.exports = {fetchBreedDescription} ;