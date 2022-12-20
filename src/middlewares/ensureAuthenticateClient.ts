import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
    sub: string,
}

export async function ensureAuthenticateClient(request: Request, response: Response, nextFunction: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).json({
            message: "Token missing!",
        });
    }

    // Bearer
    // [0] - bearer
    // [1] - token
    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, '18203624fdc792baae5f4d2e4bd6baa6') as IPayLoad;

        request.id_client = sub;

        return nextFunction();

    } catch (err) {
        return response.status(401).json({
            message: "Invalid token!",
        });
    }

}