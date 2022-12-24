import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {

    async execute(id_deliveryman: string) {


        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_deliveryman: id_deliveryman
            }
        });

        return deliveries;
    }
}