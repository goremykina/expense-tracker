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
        return await prisma.expense.findMany({
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
        return await prisma.expense.create({ data })
    },

    getExpenseById: async (id: number): Promise<Expense | null> => {
        return await prisma.expense.findUnique({
            where: { id },
        })
    },

    updateExpense: async (id: number, data: UpdateExpenseDto) => {
        return await prisma.expense.update({
            where: { id },
            data,
        })
    },

    deleteExpense: async (id: number) => {
        return await prisma.expense.delete({
            where: { id },
        })
    },
}
