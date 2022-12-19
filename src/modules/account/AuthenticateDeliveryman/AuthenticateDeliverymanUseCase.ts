import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";


interface IAuthenticateDeliveryman {
    username: string,
    password: string
}

export class AuthenticateDeliverymanUserCase {

    //Receber dados
    async execute({ username, password }: IAuthenticateDeliveryman) {
        //Pesquisar por usuario e trazer seus dados;
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        });

        // verificar existencia do usuario
        if (!deliveryman)
            throw new Error("Deliveryman not exist!");


        //verificar se senha corresponde ao username
        const passwordMatch = await compare(password, deliveryman.password);
        if (!passwordMatch)
            throw new Error("Username or pass incorret!");

        //gerar token
        const token = sign({ username }, "18203624fdc792baae5f4d2e4bd6bab8", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return token;

    }

}