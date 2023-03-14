const { Sequelize } = require("sequelize");
const path          = require("path");
const homePath      = path.resolve(__dirname) + "/test.db";

const sequelize = new Sequelize('test-db', 'root', 'id', {
    dialect: 'sqlite',
    host: homePath 
})

module.exports = sequelize;