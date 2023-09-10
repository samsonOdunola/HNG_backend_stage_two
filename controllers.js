const userModel = require("./models");
const addName = async (req, res) => {
  try {
    const name = req.query.name;

    try {
      if (!name) {
        throw new Error("Invalid name");
      }
    } catch (err) {
      return res.status(400).send(err.message);
    }
    const user = new userModel({ name: name });
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
const editName = async (req, res) => {};
const getName = async (req, res) => {
  try {
    const name = req.query.name;
    try {
      if (!name) {
        throw new Error("Invalid name");
      }
    } catch (err) {
      return res.status(400).send(err.message);
    }

    const user = await userModel.findOne({ name: name });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};
const deleteName = async (req, res) => {
  try {
    const name = req.query.name;
    try {
      if (!name) {
        throw new Error("Invalid name");
      }
    } catch (err) {
      return res.status(400).send(err.message);
    }

    const deletedUsers = await userModel.deleteOne({ name: name });

    if (deletedUsers.deletedCount === 0) {
      return res.status(404).json({ error: "User Not found" });
    }

    return res.status(200).json({ users_deleted: deletedUsers.deletedCount });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = { addName, editName, getName, deleteName };
