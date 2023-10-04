const express = require("express");
const route = express.Router();
const conn = require("../db/conn");
const validateInputs = require("../middlewares/validateInputs");
route.put("/", validateInputs, (req, res) => {
  const { username, email, mobile } = req.body;
  conn.query(
    `select email from userstbl where email = '${email}'`,
    (err, data) => {
      if (err) throw err;
      if (data.length > 0) {
        conn.query(
          `update userstbl set fullname = "${username}", mobile ="${mobile}" where email = "${email}"`,
          (err, data) => {
            if (err) throw err;
            return res.status(200).send("Registation was a success");
          }
        );
      } else {
          return res.status(404).send("Email not found")
      }
    }
  );
});
module.exports = route;
