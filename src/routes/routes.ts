import express from "express";
import RegisterController from "../controllers/users/RegisterController";
import LoginController from "../controllers/users/LoginController";



export const routes = express.Router();


routes.post("/register", RegisterController.addRegister);
routes.post("/login", LoginController.addLogin);