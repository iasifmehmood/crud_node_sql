const express = require("express"); //express package initiated
const app = express(); // express instance has been created and will be access by app variable
const bodyParser = require("body-parser");
const cors = require("cors");

/*********************DB Config**************************** */
const dotenv = require("dotenv");
const connection = require("./config/db");
dotenv.config();
/**********************DB Confif************************** */

app.use(cors());

/**********************POST API ************************** */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/**********************POST API ************************** */

app.get("/", (req, res) => {
  res.send("API running");
});

/*****************************************************Add data************************************ */
app.post("/user/add", (req, res) => {
  console.log(req.body.name);
  const name = req.body.name;
  const email = req.body.email;
  const plain_password = req.body.plain_password;
  const protected_password = req.body.protected_password;
  const cnic = req.body.cnic;
  const designation = req.body.designation;
  const contact = req.body.contact;
  try {
    connection.query(
      "INSERT into crud_table (email,plain_password,protected_password,name,cnic,designation,contact) values(?,?,?,?,?,?,?)", //2. saving in database
      [
        email,
        plain_password,
        protected_password,
        name,
        cnic,
        designation,
        contact,
      ],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log(res.json({ result }));
        }
      }
    );
  } catch (err) {
    res.send(err);
  }
});

/******************************************************Read Data*************************************** */
app.get("/user/view/", (req, res) => {
  const allData = "select * from crud_table";
  connection.query(allData, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      console.log(res.json({ rows }));
    }
  });
});

/*********************************Read by Id*************************************************/
app.get("/user/view/:id", (req, res) => {
  const allData = "select * from crud_table WHERE id=?";
  connection.query(allData, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      console.log(res.json({ rows }));
    }
  });
});

/******************************************************Delete Data************************************** */

app.delete("/user/view/:id", (req, res) => {
  const deleteData = "DELETE FROM crud_table WHERE id=?";
  connection.query(deleteData, [req.params.id], (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      console.log(res.json({ rows }));
      console.log("deleted sucessfully");
    }
  });
});

/*******************************************************Update Data************************************* */

app.put("/user/view/", (req, res) => {
  const user = req.body;
  const updateData = "UPDATE crud_table SET ? where id=" + user.id;
  connection.query(updateData, [user], (err, rows) => {
    if (err) {
      console.log(res.send(err));
    } else {
      console.log(res.send(rows));
    }
  });
});

/******************************************************Port listening**************************************** */

app.listen(process.env.PORT, function (err) {
  if (err) console.log(err);
  console.log(`listening to port ${process.env.PORT}`);
});
