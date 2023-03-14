const express = require("express");
const router = express.Router();
const md5 = require("md5");

const User = require("../../models/User");

router.post("/create", async (req, res) => {
    if ( typeof(req.body.password) == "string" ) {
        return res.status(400).json({
            error: "Password must be type of number"
        })
    }
    req.body.password = md5(req.body.password);
    const data = req.body;

    await User.create(data)
    .then((result) => {
        return res.status(201).json(result)
    }).catch((err) => {
        return res.status(400).json({
            error: "Something went wrong or " + err?.message
        })
    })
});

module.exports = router;