const {
    getUsers,
  } = require("../model/user.js");
  
  //get all products

function showUsers(req, res) {
  getUsers((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = showUsers;