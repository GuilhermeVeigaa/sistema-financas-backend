import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default {
    async deleteExpenses(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const expensesId = parseInt(id, 10);

            const expensesMatch = await prisma.expenses.findUnique({ where: { id: expensesId } });

            if (!expensesMatch) {
                return res.status(400).json({ error: "Receita não cadastrada" })
            };

            const expensesDelete =  await prisma.expenses.delete({
                where: { id: expensesId }
            });

            return res.status(200).json({ message: "Receita deletada com sucesso!" })
        } catch (err) {
            return res.status(500).json({ error: "Erro ao deletar receitas! ", details: err.message })
        }
    }
}