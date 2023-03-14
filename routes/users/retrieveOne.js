const express = require('express');
const router = express.Router();

const User = require("../../models/User");
const Post = require("../../models/Post");

// Importing middlewares
const authenticate = require('../../middlewares/authenticate');

router.get("/:id", authenticate, async (req, res) => {
    User.findOne({ 
        attributes: ["id", "email"],
        include: [
            {
                model: Post,
                as: "posts",
                attributes: ["id", "title", "content"]
            }
        ],
        where: {
            id: req.params.id
        }
    })
    .then((data) => {
        if ( !data ) {
            return res.status(404).json({
                error: "Something went wrong or user with provided ID was not found"
            })
        } 
        return res.status(200).json(data)
    }).catch((err) => {
        return res.status(404).json({
            error: "Something went wrong or user with provided ID was not found"
        })
    })
});

module.exports = router;