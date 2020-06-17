// Express Set-up
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Controllers
const getHouse = require("./controller/getHouse");
const getHouses = require("./controller/getHouses");

// Const App will be using Express method
const app = express();

app.use(express.json());
app.use(cors());

// Get House per Name
app.route("/houses/:houseName").get((req, res) => {
  let houseName = req.params.houseName;
  res.json(getHouse(houseName));
});

// Get/Post House per ID
app
  .route("/houses")
  .get((req, res) => {
    res.json(getHouses());
  })
  .post((req, res) => {
    const housesArray = getHouses();
    const houseObject = {
      id: uuidv4(),
      houseName: req.body.houseName,
      users: [],
      toDos: [],
      comments: [],
    };
    housesArray.push(houseObject);
    fs.writeFileSync("./model/houses.json", JSON.stringify(housesArray));
    res.json(housesArray);
  });

// App listening on local host
app.listen(5000, console.log("app is listening at http://localhost:5000"));
