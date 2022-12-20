import { Request, Response } from "express";
import { FindAllWithoutEndDateUSeCase } from "./findAllWithoutEndDateUseCase"

export class FindAllWithoutEndDateController {
    async handle(request: Request, response: Response) {
        const findAllController = new FindAllWithoutEndDateUSeCase();
        const result = await findAllController.execute();

        return response.json(result);
    }
}