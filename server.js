require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const CustomError = require("./utilit/customError");

app.use(express.json());
app.use(
  cors({
    origin: process.env.REACT_FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("/api/*", (req, res, next) => {
  throw new CustomError(404, "Page Not Found");
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went Wrong" } = err;
  res.status(statusCode).json({
    error: message,
  });
});

let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});
