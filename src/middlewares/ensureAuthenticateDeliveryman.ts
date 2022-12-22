import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string,
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, nextFunction: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Delivery no connected or token missing!"
        });
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, '18203624fdc792baae5f4d2e4bd6bab8') as IPayLoad;

        request.id_deliveryman = sub;

        return nextFunction();

    } catch (err) {
        return response.status(401).json({
            message: "Invalid is token!",
        });
    }
}