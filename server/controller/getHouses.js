const fs = require("fs");

const getHouses = () => {
  const housesData = JSON.parse(fs.readFileSync("./model/houses.json"));

  return housesData;
};

module.exports = getHouses;
