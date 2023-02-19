const express = require("express");
const route = require("../controller/crud_operations.js");

const router = express.Router();

router.get("/user/view/", route.viewData);
router.get("/user/view/:id", route.viewDataById);
router.post("/user/add", route.addData);
router.delete("/user/view/:id", route.deleteData);
router.put("/user/view/", route.updateData);

module.exports = router;
