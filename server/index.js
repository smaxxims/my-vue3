const express = require("express");
const  cors = require("cors");
const Router = require("./routes/routes.js");

const app = express();
const port = '5000'

app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(port, () => {
  console.log("Server running successfully on port" + port);
});