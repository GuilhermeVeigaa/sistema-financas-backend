import express from "express";
import RegisterController from "../controllers/users/RegisterController";



export const routes = express.Router();


routes.post("/register", RegisterController.addRegister);