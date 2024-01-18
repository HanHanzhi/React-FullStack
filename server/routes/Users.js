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

module.exports = router;
