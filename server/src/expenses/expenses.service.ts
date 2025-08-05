import { createExpense, getAllExpenses } from './expenses.repository'
import { CreateExpenseDto } from './dto/create-expense.dto'

export const getExpenses = () => getAllExpenses()

export const addExpense = (expenseData: CreateExpenseDto) => createExpense(expenseData)
