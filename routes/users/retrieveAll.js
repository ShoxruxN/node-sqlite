const express = require('express');
const router = express.Router();

const User = require("../../models/User");
const Post = require("../../models/Post");

const pagination = require("../../components/pagination");

// Importing middlewares
const authenticate = require('../../middlewares/authenticate');

router.get("/", authenticate, async (req, res) => {
    User.findAll({
        attributes: ["id", "email"],
        include: [
            {
                model: Post,
                as: "posts",
                attributes: ["id", "title", "content"]
            }
        ],
    })
    .then(( data ) => {
        if ( !data ) {
            return res.status(404).json({
                error: "User list is empty"
            })
        }
        const page   = req.query.page  || 1;
        const limit  = req.query.limit || 4;

        return res.status(200).json(pagination(page, limit, data, "users"))
    })
    .catch((err) => {
        return res.status(400).json({
            error: err?.message
        })
    })
});

module.exports = router;