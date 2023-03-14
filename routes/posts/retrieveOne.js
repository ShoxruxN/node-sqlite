const express = require('express');
const router = express.Router();

const Post = require("../../models/Post");
const User = require("../../models/User");

// Importing middlewares
const authenticate = require('../../middlewares/authenticate');

router.get("/:id", authenticate, async (req, res) => {
    Post.findOne({ 
        attributes: ["id", "title", "content"],
        include: [
            {
                model: User,
                as: "user",
                attributes: ["id", "email"]
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then((data) => {
        if ( !data ) {
            return res.status(404).json({
                error: "Something went wrong or post with provided ID was not found"
            })
        } 
        return res.status(200).json(data)
    }).catch((err) => {
        return res.status(404).json({
            error: "Something went wrong or post with provided ID was not found"
        })
    })
});

module.exports = router;