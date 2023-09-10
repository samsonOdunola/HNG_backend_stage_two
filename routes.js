const express = require("express");
const router = express.Router();
const { addName, getName, deleteName, editName } = require("./controllers");

router.post("/", addName);
router.get("/", getName);
router.put("/", editName);
router.delete("/", deleteName);
module.exports = router;
