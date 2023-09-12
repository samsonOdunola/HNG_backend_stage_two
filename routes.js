const express = require("express");
const router = express.Router();
const { addName, getName, deleteName, editName } = require("./controllers");

router.post("/", addName);
router.get("/:user_id", getName);
router.put("/:user_id", editName);
router.delete("/:user_id", deleteName);
module.exports = router;
