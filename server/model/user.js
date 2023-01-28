const db = require("../config/database.js");

const getUsers = (result) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

module.exports = getUsers;