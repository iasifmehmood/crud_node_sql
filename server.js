const express = require("express"); //express package initiated
const app = express(); // express instance has been created and will be access by app variable
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const crud_routes = require("./routes/route.js");

/*********************DB Config**************************** */
const dotenv = require("dotenv");
// const connection = require("./config/db");
dotenv.config();

app.use(cors());

/**********************POST API ************************** */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/", crud_routes);

/******************************************************Port listening**************************************** */

app.listen(process.env.PORT, function (err) {
  if (err) console.log(err);
  console.log(`listening to port ${process.env.PORT}`);
});
