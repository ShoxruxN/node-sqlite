const express = require('express');
const router = express.Router();

const Post = require("../../models/Post");
const User = require("../../models/User");

const pagination = require("../../components/pagination");

// Importing middlewares
const authenticate = require('../../middlewares/authenticate');

router.get("/", authenticate, async (req, res) => {
    Post.findAll({
        attributes: ["id", "title", "content"],
        include: [
            {
                model: User,
                as: "user",
                attributes: ["id", "email"]
            }
        ]
    })
    .then(( data ) => {
        if ( !data ) {
            return res.status(404).json({
                error: "User list is empty"
            })
        }
        const page   = req.query.page  || 1;
        const limit  = req.query.limit || 4;

        return res.status(200).json(pagination(page, limit, data, "posts"))
    })
    .catch((err) => {
        return res.status(400).json({
            error: err?.message
        })
    })
});

module.exports = router;