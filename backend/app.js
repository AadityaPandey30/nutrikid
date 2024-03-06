const express = require("express");
const morgan = require("morgan");
const path = require("path");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("Middleware hit");
  next();
});

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this Server!`, 404));
});

module.exports = app;
