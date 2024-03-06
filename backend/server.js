const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION!");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection successful!");
    // console.log(con.connection);
  })
  .catch((err) => console.error(err));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app running in port:", port);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
