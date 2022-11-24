const request = require("request");

const fetchBreedDescription = (breedname, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    try {
      callback(null, data[0].description);
    } catch (error) {
      let errorMsg = "Breed not found or no description available.";
      callback(errorMsg, null);
    }

  });
};

module.exports = { fetchBreedDescription };