import { Expense, PrismaClient } from '@prisma/client'
import { CreateExpenseDto } from './dto/create-expense.dto'

const prisma = new PrismaClient()

export const ExpensesRepository = {
    getAllExpenses: async ({
        limit,
        offset,
        fromDate,
        toDate,
    }: {
        limit: number
        offset: number
        fromDate: string
        toDate: string
    }): Promise<Expense[]> => {
        return prisma.expense.findMany({
            where: {
                AND: [fromDate ? { date: { gte: fromDate } } : {}, toDate ? { date: { lte: toDate } } : {}],
            },
            skip: offset,
            take: limit,
            orderBy: {
                date: 'desc',
            },
        })
    },

    createExpense: async (data: CreateExpenseDto): Promise<Expense> => {
        return prisma.expense.create({ data })
    },
}
