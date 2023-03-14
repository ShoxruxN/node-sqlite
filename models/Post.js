const { Model, DataTypes } = require("sequelize");
const sequelize            = require("../databases/db");

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId : {
        type: DataTypes.NUMBER
    }
}, {
    sequelize,
    modelName: "post"
});

module.exports = Post;
