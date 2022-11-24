const request = require("request");

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breads/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log(`ERR accessing API`);
    console.log(`> ${error}`);
    return;
  }
  const data = JSON.parse(body);
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log(`Breed not found or no description available.`);
  }
});