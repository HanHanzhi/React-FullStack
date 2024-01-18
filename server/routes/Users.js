const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const { username, password } = req.body; //{names} in bracket should match the property name in req.body
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        password: hash,
      });
      res.json("SUCCESS");
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const { username, password } = req.body; //{names} in bracket should match the property name in req.body
    const user = await Users.findOne({ where: { username: username } });
    if (!user) res.json({ error: "User Doesn't Exist" });
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.json({ error: "Wrong Username or Password" });
      return res.json("Logged in Successfully");
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
