import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";
import { UserDoc } from "../Interfaces/userDoc";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
export const authController = asyncHandler(
  async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userExists: UserDoc | null = await User.findOne({ email });
    if (userExists && (await userExists.matchPassword(password))) {
      res.json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  }
);

export const RegisterController = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);
