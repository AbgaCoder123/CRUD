const express = require("express");
const route = express.Router();
const conn = require("../db/conn");
route.get("/", (req, res) => {
  const { username, email, mobile, password } = req.body;
  conn.query(`select email from userstbl`, (err, data) => {
    if (err) throw err;
    if (data.length > 0) return res.status(200).send(data);
  });
});
module.exports = route;
