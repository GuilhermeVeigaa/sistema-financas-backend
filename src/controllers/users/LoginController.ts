import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient

export default {
    async addLogin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const userExist = await prisma.user.findUnique({ where: { email } });

            if (!userExist) {
                return res.status(400).json({ error: "Credenciais inválidas" })
            };

            const passwordMatch = await bcrypt.compare(password, userExist.password);

            if (!passwordMatch) {
                return res.status(400).json({ error: "Credenciais inválidas" })
            };

            return res.status(200).json({ message: "Login efetuado com sucesso" });
        } catch (err) {
            return res.status(500).json({ error: "Erro ao efetuar login", details: err });
        }
    }
}