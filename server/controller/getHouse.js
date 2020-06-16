const fs = require("fs");

const getHouse = () => {
  const housesData = JSON.parse(fs.readFileSync("./model/houses.json"));

  return housesData;
};

module.exports = getHouse;
