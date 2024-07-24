import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import authToken from "../../key/JwtToken.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

type JwtPayload = {
    id: number
}

export const authMiddleware = async (
    req: Request, 
    res: Response, 
    next: NextFunction) => {
        const { authorization } = req.headers;

        if (!authorization) {
            res.status(401).json({ message: "Acesso não autorizado" })
        };

        try {
            const token = authorization.split(' ')[1];

            const { id } = jwt.verify(token, authToken()) as JwtPayload
    
            const user = await prisma.user.findUnique({ where: { id } });
    
            if (!user) {
                return res.status(400).json({ error: "Acesso não autorizado" })
            };
    
            const { password:_, ...loggedUser } = user;
    
            req.user = loggedUser
    
            next()
        } catch (err) {
            return res.status(400).json({ error: "Token Inválido ou expirado" })
        }

}