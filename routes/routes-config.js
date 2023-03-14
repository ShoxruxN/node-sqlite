// Users
const usersCreate           = require("./users/create");
const usersAuthorize        = require("./users/authorize")
const usersRetrieveOne      = require("./users/retrieveOne");
const usersRetrieveAll      = require("./users/retrieveAll");

// Posts
const postsCreate           = require("./posts/create");
const postsRetrieveOne      = require("./posts/retrieveOne");
const postsRetrieveAll      = require("./posts/retrieveAll");

const Routes = [
    {
        path: "/users",
        actions: [
            {
                name: "Create a user",
                handler: usersCreate
            },
            {
                name: "User authorization",
                handler: usersAuthorize
            },
            {
                name: "Retrieve one user",
                handler: usersRetrieveOne
            },
            {
                name: "Retrieve all users",
                handler: usersRetrieveAll
            }
        ]
    },
    {
        path: "/posts",
        actions: [
            {
                name: "Create a post",
                handler: postsCreate
            },
            {
                name: "Retrieve one post",
                handler: postsRetrieveOne
            },
            {
                name: "Retrieve all posts",
                handler: postsRetrieveAll
            }
        ]
    }
]

module.exports = Routes;