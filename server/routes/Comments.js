const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId123", async (req, res) => {
  const postId = req.params.postId123; //take note for req.params.name , name must be same as :name
  const comments = await Comments.findAll({ where: { PostId: postId } });
  return res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  try {
    //receive a FORM from frontend in JSON
    const comment = req.body;
    const username = req.user.username;
    comment.username = username;
    //this body data should have the same format as our
    //Post.js format in
    await Comments.create(comment);
    //sequelize is called here to create and insert that object into db
    return res.json(comment);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
