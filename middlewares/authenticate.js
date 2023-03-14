const jwt = require("jsonwebtoken");
const config = require('../config');
const User = require("../models/User");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(' ')[1];
    if ( token == null ) return res.sendStatus(401);
    jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, user) => {
        if ( err ) return res.sendStatus(403);
        User.findOne({id: user.id})
        .then(( data ) => {
            
                req.user = user;
                next();

        })
    });
}

module.exports = authenticateToken;