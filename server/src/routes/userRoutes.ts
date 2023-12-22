import express from "express";
import {
  RegisterController,
  authController,
} from "../controllers/userController";

const router = express.Router();

router.route("/").post(RegisterController);
router.route("/auth").post(authController);

export default router;
