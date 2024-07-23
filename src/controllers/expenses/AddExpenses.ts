import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default {
    async addExpenses(req: Request, res: Response) {
        try {
            const { desc, value } = req.body;
            
            const add = await prisma.expenses.create({
                data: {
                desc: desc,
                value: value
                }
            });

            return res.status(200).json({ message: "Receita cadastrada com sucesso!" });

        } catch (err) {
            return res.status(500).json({ error: "Erro ao cadastrar receita!", details: err.message})
        }         
    }
}