import express from "express";
import {GetUsers,GetUser,CreateUser ,UpdateUser,DeleteUser} from "./controllers.js"
const router = express.Router();

 router.get("/", GetUsers);
 router.get("/:id", GetUser);
 router.post("/", CreateUser);
 router.put("/:id", UpdateUser);
 router.delete("/:id", DeleteUser);
export default router;

