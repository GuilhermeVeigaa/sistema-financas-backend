import express from "express";
import RegisterController from "../controllers/users/RegisterController";
import LoginController from "../controllers/users/LoginController";
import AddExpenses from "../controllers/expenses/AddExpenses";
import GetExpenses from "../controllers/expenses/GetExpenses";
import UpdateExpenses from "../controllers/expenses/UpdateExpenses";
import DeleteExpenses from "../controllers/expenses/DeleteExpenses";
import { authMiddleware } from "../middlewares/authMiddleware";



export const routes = express.Router();


routes.post("/register", RegisterController.addRegister);
routes.post("/login", LoginController.addLogin);

routes.post("/expenses", AddExpenses.addExpenses);
routes.get("/expenses", authMiddleware,GetExpenses.getExpeses);
routes.put("/expenses:id", UpdateExpenses.updateExpenses);
routes.delete("/expenses:id", DeleteExpenses.deleteExpenses);