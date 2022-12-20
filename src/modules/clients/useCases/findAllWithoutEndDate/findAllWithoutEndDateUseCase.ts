import { prisma } from "../../../../database/prismaClient";



export class FindAllWithoutEndDateUSeCase {
    async execute() {

        const findAll = await prisma.deliveries.findMany({
            where: {
                end_at: null
            }
        });

        return findAll;
    }
}