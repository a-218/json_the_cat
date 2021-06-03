const request = require('request');

const link = 'https://api.thecatapi.com/v1/breeds/search?q=';

const search = process.argv.slice(2);
const searchLink = link + search;


request(searchLink, (error, response, body) => {
  if (body === '[]') {
    return console.log('Breed name is not found');
  }
  if (error) {
    return  console.log('request error failed:', error); // Print the error if one occurred
  }
  
  const data = JSON.parse(body);
  //console.log(data);
  console.log(data[0]['description']);
  //console.log(typeof data);

  // Print the HTML for the Google homepage.
});