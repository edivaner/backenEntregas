import { prisma } from "../../../../database/prismaClient";



export class FindAllWithoutEndDateUSeCase {
    async execute() {

        const findAll = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            }
        });

        return findAll;
    }
}