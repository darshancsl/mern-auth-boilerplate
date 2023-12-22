import express from "express";
import {
  RegisterUser,
  authUser,
  logoutUser,
} from "../controllers/userController";

const router = express.Router();

router.route("/").post(RegisterUser);
router.route("/auth").post(authUser);
router.route("/logout").post(logoutUser);

export default router;
