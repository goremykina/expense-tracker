import { PrismaClient } from '@prisma/client'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'
import { Expense } from './entity/expense.entity'

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
        const expenses = await prisma.expense.findMany({
            where: {
                AND: [fromDate ? { date: { gte: fromDate } } : {}, toDate ? { date: { lte: toDate } } : {}],
            },
            skip: offset,
            take: limit,
            orderBy: {
                date: 'desc',
            },
        })
        return expenses.map((expense) => ({
            ...expense,
            amount: expense.amount.toNumber(),
        }))
    },

    createExpense: async (data: CreateExpenseDto): Promise<Expense> => {
        const expense = await prisma.expense.create({ data })
        return {
            ...expense,
            amount: expense.amount.toNumber(),
        }
    },

    getExpenseById: async (id: number): Promise<Expense | null> => {
        const expense = await prisma.expense.findUnique({
            where: { id },
        })

        if (!expense) {
            return null
        }

        return {
            ...expense,
            amount: expense.amount.toNumber(),
        }
    },

    updateExpense: async (id: number, data: UpdateExpenseDto): Promise<Expense> => {
        const expense = await prisma.expense.update({
            where: { id },
            data,
        })
        return {
            ...expense,
            amount: expense.amount.toNumber(),
        }
    },

    deleteExpense: async (id: number) => {
        await prisma.expense.delete({
            where: { id },
        })
    },
}
