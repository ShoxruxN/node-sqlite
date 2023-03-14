const express = require('express');
const router = express.Router();
const md5 = require("md5");

// Importing models
const User = require("../../models/User");

// Importing utils
const generateAccessToken = require('../../utils/functions');

router.post("/authorize", (req, res) => {
    User.findOne({ where: {
            email: req.body.email, 
            password: md5(req.body.password)
        }
    }).then(( data ) => {
        if( !data ) 
            return res.status(404).json({ message: "Email or password is incorrect." });

        const user = {
            id: data.id
        };

        const accessToken = generateAccessToken(user);

        const response = {
            email: data.email,
            password: data.password,
            id: data.id,
            accessToken: accessToken,
        };
        return res.status(200).json(response)

    })
    .catch(( err ) => {
        res.status(400).json({ error: "Something went wrong with user" });
    });
});

module.exports = router;