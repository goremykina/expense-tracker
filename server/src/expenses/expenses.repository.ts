import { Expense, PrismaClient } from '@prisma/client'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

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

    getUniqExpenseById: async (id: number): Promise<Expense | null> => {
        return prisma.expense.findUnique({
            where: { id },
        })
    },

    updateExpense: (id: number, data: UpdateExpenseDto) => {
        return prisma.expense.update({
            where: { id },
            data,
        })
    },

    deleteExpense: (id: number) => {
        return prisma.expense.delete({
            where: { id },
        })
    },
}
