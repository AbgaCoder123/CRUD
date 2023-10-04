const express = require("express");
const route = express.Router();
const conn = require("../db/conn");
const validateInputs = require("../middlewares/validateInputs");
route.post("/", validateInputs, (req, res) => {
  const { username, email, mobile, password } = req.body;
  const value = [username, email, mobile, password];
  conn.query(
    `select email from userstbl where email = '${email}'`,
    (err, data) => {
      if (err) throw err;
      if (data.length > 0) {
        return res.status(404).send("Email already exist");
      } else {
        conn.query(
          `insert into userstbl (fullname, email, mobile, password) values (?)`,
          [value],
          (err, data) => {
            if (err) throw err;
            return res.status(200).send("Registation was a success");
          }
        );
      }
    }
  );
});
module.exports = route;
