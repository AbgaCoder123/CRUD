const sql = require("mysql");
const conn = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogsystemdb",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Connected ....");
});
module.exports = conn