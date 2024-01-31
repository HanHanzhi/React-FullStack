const express = require("express");
const router = express.Router();
const { Posts } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
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

router.get("/byId/:id", async (req, res) => {
  //":parameterName" value is inside req.params.parameterName
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/123", validateToken, async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const post = req.body;
    //this body data should have the same format as our
    //Post.js format in
    await Posts.create(post);
    //sequelize is called here to create and insert that object into db
    return res.json(post);
  } catch (error) {
    return res.send(error);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const post = await Posts.findByPk(id);

//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     await post.destroy();
//     res.json({ message: "Post deleted successfully" });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const post = await Posts.findByPk(id);

//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     // Update post with new data from the request body
//     await post.update(req.body);

//     res.json({ message: "Post updated successfully", updatedPost: post });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

module.exports = router;
