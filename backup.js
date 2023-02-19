/*****************************************************Add data************************************ */

// app.post("/user/add", async (req, res) => {
//   console.log(req.body.name);
//   const name = req.body.name;
//   const email = req.body.email;
//   const plain_password = req.body.plain_password;
//   let protected_password = req.body.protected_password;
//   const salt = await bcrypt.genSalt(10);
//   protected_password = await bcrypt.hash(protected_password, salt);
//   const cnic = req.body.cnic;
//   const designation = req.body.designation;
//   const contact = req.body.contact;
//   try {
//     await connection.query(
//       "INSERT into crud_table (email,plain_password,protected_password,name,cnic,designation,contact) values(?,?,?,?,?,?,?)", //2. saving in database
//       [
//         email,
//         plain_password,
//         protected_password,
//         name,
//         cnic,
//         designation,
//         contact,
//       ],
//       function (err, result) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(res.json({ result }));
//           console.log("data inserted successfully");
//         }
//       }
//     );
//   } catch (err) {
//     res.send(err);
//   }
// });

// /******************************************************Read Data*************************************** */

// app.get("/user/view/", async (req, res) => {
//   const allData = "select * from crud_table";
//   await connection.query(allData, (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(res.json({ rows }));
//       console.log("Data read success");
//     }
//   });
// });

// /*********************************Read by Id*************************************************/

// app.get("/user/view/:id", async (req, res) => {
//   const allData = "select * from crud_table WHERE id=?";
//   await connection.query(allData, [req.params.id], (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(res.json({ rows }));
//       console.log("data viewed by ID succesfully");
//     }
//   });
// });

// /******************************************************Delete Data************************************** */

// app.delete("/user/view/:id", async (req, res) => {
//   const deleteData = "DELETE FROM crud_table WHERE id=?";
//   await connection.query(deleteData, [req.params.id], (err, rows) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(res.json({ rows }));
//       console.log("data deleted sucessfully");
//     }
//   });
// });

// /*******************************************************Update Data************************************* */

// app.put("/user/view/", async (req, res) => {
//   const user = req.body;
//   const updateData = "UPDATE crud_table SET ? where id=" + user.id;
//   await connection.query(updateData, [user], (err, rows) => {
//     if (err) {
//       console.log(res.send(err));
//     } else {
//       console.log(res.send(rows));
//       console.log("data updated successfully");
//     }
//   });
// });
