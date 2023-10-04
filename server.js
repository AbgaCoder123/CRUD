require("dotenv").config();
const express = require("express");
const cors = require("cors");

const allRoute = require("./routes/all");
const registerRoute = require("./routes/registerRoute");
const updateRoute = require("./routes/updateRoute");
const deleteRoute = require("./routes/deleteRoute");
// const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.send("Welcome Home!!!!");
});

app.use("/api/all", allRoute);
app.use("/api/register", registerRoute);
app.use("/api/update", updateRoute);
app.use("/api/delete", deleteRoute);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}`));
