import { Router } from "express";
import userController from "../controller/user.controller.js";
const user = Router();

user.get("/", userController.all);

export default user;