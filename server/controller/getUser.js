const fs = require("fs");

const getUser = (userName) => {
  const usersData = fs.readFileSync("./model/users.json");

  const filteredUserData = JSON.parse(usersData).filter(
    (user) => user.userName === userName
  );

  return filteredUserData[0];
};

module.exports = getUser;
