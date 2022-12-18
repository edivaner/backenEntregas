import { prisma } from "../../../database/prismaClient"
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateClient {
    username: string,
    password: string
}

export class AuthenticateClientUserCase {
    // Receber username e password ^
    async execute({ username, password }: IAuthenticateClient) {

        // Verificar se username está cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });

        if (!client)
            throw new Error("Username or pass incorret!");

        // verificar se senha corresponde ao username
        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch)
            throw new Error("Username or pass incorret!");

        //gerar token
        const token = sign({ username }, "18203624fdc792baae5f4d2e4bd6baa6", {
            subject: client.id,
            expiresIn: "1d"
        });

        return token;
    }
}