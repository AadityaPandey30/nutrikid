const express = require("express");
require('dotenv').config({ path: './config.env' });

const morgan = require("morgan");
const path = require("path");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const chatRouter = require("./routes/chatRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();
const cors = require("cors"); // Import cors middleware

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.join(__dirname, "public")));

app.use(cors()); // Enable CORS for all routes

app.use((req, res, next) => {
  console.log("Middlewares working fine!");
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/chat", chatRouter);
app.use("/api/v1/blog", blogRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this Server!`, 404));
});

module.exports = app;
