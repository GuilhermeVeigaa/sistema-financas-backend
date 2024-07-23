import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default {
    async getExpeses(req: Request, res: Response) {
        try {
            const expenses = await prisma.expenses.findMany();
            
            return res.status(200).json(expenses);

        } catch (err) {
            return res.status(500).json({ error: "Erro ao buscar receitas ", details: err.message })
        }
    }
}