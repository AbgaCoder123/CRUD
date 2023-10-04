const express = require("express");
const route = express.Router();
const conn = require("../db/conn");
route.delete("/:id", (req, res) => {
  const id = req.params.id;
  // const { username, email, mobile, password } = req.body;
  conn.query(`delete from userstbl where id = ${id}`, (err, data) => {
    if (err) throw err;
    if (data.affectedRows > 0) return res.status(200).send(data);
  });
});
module.exports = route;
