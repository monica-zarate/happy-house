// Express Set-up
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Controllers
const getHouse = require("./controller/getHouse");
const getHouses = require("./controller/getHouses");
const getUser = require("./controller/getUser");

// Const App will be using Express method
const app = express();

app.use(express.json());
app.use(cors());

// Get House per Name
app.route("/houses/:houseName").get((req, res) => {
  let houseName = req.params.houseName;
  res.json(getHouse(houseName));
});

// Get/Post House
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
      toDos: [],
      comments: [],
    };
    housesArray.push(houseObject);
    fs.writeFileSync("./model/houses.json", JSON.stringify(housesArray));
    res.json(housesArray);
  });

// Get User per UserName Routes
app.route("/users/:userName").get((req, res) => {
  let userName = req.params.userName;
  res.json(getUser(userName));
});
app.route("/users").post((req, res) => {
  let newUser = {
    id: uuidv4().toString(),
    userName: req.body.userName,
    password: req.body.password,
    houseName: req.body.houseName,
    color: req.body.color,
  };
  let usersData = fs.readFileSync("./model/users.json");
  let userArray = JSON.parse(usersData);
  userArray.push(newUser);
  fs.writeFileSync("./model/users.json", JSON.stringify(userArray));
  res.json({ message: "Saved user" });
});

// App listening on local host
app.listen(5000, console.log("app is listening at http://localhost:5000"));
