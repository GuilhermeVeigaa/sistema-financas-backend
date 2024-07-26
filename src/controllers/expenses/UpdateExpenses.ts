import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export default {
    async updateExpenses(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { desc, value, type } = req.body;

            const expensesId = parseInt(id, 10);

            const expensesMatch = await prisma.expenses.findUnique({ where: { id: expensesId } });

            if (!expensesMatch) {
                return res.status(400).json({ error: "Receita não cadastrada" })
            };

            const update =  await prisma.expenses.update({
                where: { id: expensesId },
                data: {
                    desc: desc,
                    value: value,
                    type: type
                }
            });

            return res.status(200).json({ message: "Receita atualizada com sucesso!" })
        } catch (err) {
            return res.status(500).json({ error: "Erro ao atualizar receitas! ", details: err.message })
        }
    }
}