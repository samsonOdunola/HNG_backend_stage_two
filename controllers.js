const userModel = require("./models");
const addName = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const name = req.body.name;

    try {
      if (!name) {
        throw new Error("Invalid entry");
      }
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    const user = new userModel({ name: name });
    await user.save();
    return res.status(201).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
const editName = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const id = req.params.user_id;
    const newName = req.body.name;
    try {
      if (!id) {
        throw new Error("Invalid entry");
      }
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    const options = { returnDocument: "after" };
    const update = { name: newName };

    const user = await userModel.findOneAndUpdate({ _id: id }, update, options);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
const getName = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const id = req.params.user_id;

    try {
      if (!id) {
        throw new Error("Invalid entry");
      }
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }

    const user = await userModel.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
const deleteName = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const id = req.params.user_id;
    try {
      if (!id) {
        throw new Error("Invalid entry");
      }
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
    const user = await userModel.findOne({ _id: id });

    const deletedUsers = await userModel.deleteOne({ _id: id });

    if (deletedUsers.deletedCount === 0) {
      return res.status(404).json({ error: "User Not found" });
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = { addName, editName, getName, deleteName };
