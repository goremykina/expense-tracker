import { Expense, PrismaClient } from '@prisma/client'
import { CreateExpenseDto } from './dto/create-expense.dto'

const prisma = new PrismaClient()

export const getAllExpenses = (): Promise<Expense[]> => {
    return prisma.expense.findMany()
}

export const createExpense = (data: CreateExpenseDto) => {
    return prisma.expense.create({ data: data })
}
