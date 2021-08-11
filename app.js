const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/db");

// require routes
const tasks = require("./routes/tasks");
const history = require("./routes/history");
const user = require("./routes/auth");

connectDB();

const app = express();

app.use(express.json());

// use routes
app.use("/tasks", tasks);
app.use("/history", history);
app.use("/user", user);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server running at ${PORT}`));
