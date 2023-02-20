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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/***********************************Swagger******************* */

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
// const swaggerJSDoc = require("swagger-jsdoc");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "node project",
//       version: "1.0.0",
//     },
//     servers: [
//       {
//         url: "http://localhost:4000",
//       },
//     ],
//   },
//   apis: ["./server.js"],
// };

// const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/", crud_routes);

/******************************************************Port listening**************************************** */

// app.listen(8000, function (err) {
//   if (err) console.log(err);
//   console.log(`Swagger API on 8000`);
// });

app.listen(process.env.PORT, function (err) {
  if (err) console.log(err);
  console.log(`listening to port ${process.env.PORT}`);
});
