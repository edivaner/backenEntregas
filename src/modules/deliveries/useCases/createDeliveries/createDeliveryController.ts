import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveryUseCase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { id_client } = request;

        const createDeliveryController = new CreateDeliveryUseCase();
        const result = await createDeliveryController.execute({ id_client, item_name });

        return response.json(result);

    }
}