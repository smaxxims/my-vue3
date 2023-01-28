import {
    getUsers,
  } from "../model/user.js";
  
  //get all products
  export const showUsers = (req, res) => {
    getUsers((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };