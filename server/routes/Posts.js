const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
/*The use of curly braces {} in the const { Posts } statement is known as object destructuring 
in JavaScript. This syntax is commonly used when importing modules or requiring specific properties 
from an object.*/

/*When you use const { Posts } = require("../models");, it imports the object exported by the index.js 
file in the models directory.The db object exported by index.js contains a property named Posts, which 
represents the Sequelize model defined in Post.js. */

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.post("/123", async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const post = req.body;
    //this body data should have the same format as our
    //Post.js format in
    await Posts.create(post);
    //sequelize is called here to create and insert that object into db
    res.json(post);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
