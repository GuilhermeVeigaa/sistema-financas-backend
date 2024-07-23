import express from "express";
import RegisterController from "../controllers/users/RegisterController";
import LoginController from "../controllers/users/LoginController";
import AddExpenses from "../controllers/expenses/AddExpenses";
import GetExpenses from "../controllers/expenses/GetExpenses";



export const routes = express.Router();


routes.post("/register", RegisterController.addRegister);
routes.post("/login", LoginController.addLogin);

routes.post("/expenses", AddExpenses.addExpenses);
routes.get("/expenses", GetExpenses.getExpeses);