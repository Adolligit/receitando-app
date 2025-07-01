import { Router } from "express";
import user from "./user.routes.js";

const route = Router();

route.use("/user", user);

export default route;