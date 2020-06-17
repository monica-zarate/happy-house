const fs = require("fs");

const getHouse = (houseName) => {
  const houseData = fs.readFileSync("./model/houses.json");

  const filteredHouseData = JSON.parse(houseData).filter(
    (house) => house.houseName === houseName
  );

  return filteredHouseData[0];
};

module.exports = getHouse;
