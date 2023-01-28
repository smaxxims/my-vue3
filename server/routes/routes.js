import express from "express";

import {
  showUsers
} from "../controller/user.js";

const router = express.Router();

router.get("/users", showUsers);

export default router;