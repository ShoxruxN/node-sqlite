const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

const authenticate = require("../../middlewares/authenticate");

router.post("/create", authenticate, async (req, res) => {

    const userID = req.user.id;
    Post.create({
        title: req.body.title,
        content: req.body.content,
        userId: userID
    })
    .then((result) => {
        return res.status(201).json(result)
    }).catch((err) => {
        return res.status(400).json({
            error: "Something went wrong or " + err?.message
        })
    })
});

module.exports = router;