const express = require("express");
const app = express();
const port = 3001;
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "OPTIONS"],
  crediential: true,
};
app.use(cors(corsOptions));

const Router = require("./router/Router");
app.use("/", Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
