import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";



export class CreateDeliverymanController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const createDeliverymanController = new CreateDeliverymanUseCase();
        const result = await createDeliverymanController.execute({ username, password });

        return response.json(result);
    }
}