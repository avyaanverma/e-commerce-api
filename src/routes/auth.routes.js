import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";

const authRoutes = express.Router();

/**
 * @route POST /login
 * @description Login a person using email and password
 * @access PUBLIC
 */
authRoutes.post("/login", loginUser);
/**
 * @route POST /register
 * @description Register a new person using name, email and password
 * @access PUBLIC
 */
authRoutes.post("/register", registerUser);


export default authRoutes;