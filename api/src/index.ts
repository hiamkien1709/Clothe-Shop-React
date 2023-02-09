import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();

// middlware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

// Datatbase
const URI = process.env.MONGODB_URL;

mongoose.connect(
  URI,
  {
    autoIndex: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connection.");
  }
);

// Routes
app.use("/api", routes);

// Start server listening
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
