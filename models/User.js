const { Model, DataTypes } = require("sequelize");
const sequelize            = require("../databases/db");
const Post                 = require("./Post");

class User extends Model {}

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Email address already in use!' 
        },
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    accessToken: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: "user"
});

User.hasMany(Post, {foreignKey: "userId"})
Post.belongsTo(User);


module.exports = User;