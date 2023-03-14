const jwt = require('jsonwebtoken');
const config = require('../config');

function generateAccessToken(user) {
    return jwt.sign(user, config.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = generateAccessToken;