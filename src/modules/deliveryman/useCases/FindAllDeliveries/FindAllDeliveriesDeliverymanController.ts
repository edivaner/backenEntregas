import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCase } from "./FindAllDeliveriesDeliverymanUseCase";



export class FindAllDeliveriesDeliverymanControlles {

    async handle(request: Request, response: Response) {

        const { id_deliveryman } = request;
        const findAllDeliveriesDeliverymanUseCase = new FindAllDeliveriesDeliverymanUseCase();
        const deliveries = findAllDeliveriesDeliverymanUseCase.execute(id_deliveryman);

        return response.json(deliveries);
    }
}