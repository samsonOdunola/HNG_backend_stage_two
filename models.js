const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
