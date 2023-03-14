const express = require("express");
const app     = express();
const routes  = require("./routes/routes-config");

// DB
const DB = require("./databases/db");
DB.sync({ force: false }).then(() => console.log("connected"));

app.use(express.json());

// Routes register
routes.map((route) => {
    route.actions.map((action) => {
        app.use(route.path, action.handler)
    });
});

app.listen(3000);