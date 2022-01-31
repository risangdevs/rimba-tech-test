const express = require("express");
const app = express();
const port = process.env.PORT || 3012;
const router = require("./routes");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});