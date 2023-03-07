const express = require("express");
const app = express();app.use(express.json());
require("dotenv").config({ path: "./config/.env" });
const Port = process.env.port || 9000;
const connect = require("./config/DB");
connect();

app.use("/auth", require("./routes/authRoutes"));
app.listen(Port, (error) =>
  error
    ? console.log(error.message)
    : console.log("this server is running on" + Port)
);
