const express = require("express");
const db = require("./db");

const app = express();
const router = app.route()


const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = router;