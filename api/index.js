const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const dataRoutes = require("./routes/data");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/data", dataRoutes);

app.listen(process.env.port || 3000, () => {
  console.log(`Server is up!`);
});
