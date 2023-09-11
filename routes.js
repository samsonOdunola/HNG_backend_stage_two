const express = require("express");
const router = express.Router();
const { addName, getName, deleteName, editName } = require("./controllers");

router.post("/", addName);
router.get("/", getName);
router.put("/:user_id", editName);
router.delete("/", deleteName);
module.exports = router;
