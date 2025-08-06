import { Expense, PrismaClient } from '@prisma/client'
import { CreateExpenseDto } from './dto/create-expense.dto'

const prisma = new PrismaClient()

export const ExpensesRepository = {
    getAllExpenses: async (): Promise<Expense[]> => {
        return prisma.expense.findMany()
    },

    createExpense: async (data: CreateExpenseDto): Promise<Expense> => {
        return prisma.expense.create({ data })
    },
}
