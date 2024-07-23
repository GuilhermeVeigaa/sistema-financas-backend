import { PrismaClient } from "@prisma/client"
import { Request, Response } from "express"
import bcrypt from "bcrypt"

const prisma = new PrismaClient

export default {
    async addRegister(req: Request, res: Response) {
        try {
            const { email, name, password } = req.body;
    
            const userExist = await prisma.user.findUnique({ where: { email } });
    
            if (userExist) {
                return res.status(400).json({ error: "Email já cadastrado" })
            };
    
            const hashedPass = await bcrypt.hash(password, 10);


            const register = await prisma.user.create({
                data: {
                    email: email,
                    name: name,
                    password: hashedPass
                }
            });

            return res.status(200).json({ message: "Usuário cadastrado com sucesso" });


        } catch (err) {
            return res.status(500).json({ error: "erro ao cadastrar usuário", details: err});
        }
    }
}