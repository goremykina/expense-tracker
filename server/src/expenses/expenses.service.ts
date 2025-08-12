import { ExpensesRepository } from './expenses.repository'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { UpdateExpenseDto } from './dto/update-expense.dto'

export const ExpensesService = {
    getExpenses: (filters?: { limit?: number; offset?: number; fromDate?: string; toDate?: string }) => {
        const defaultedFilters = {
            limit: filters?.limit ?? 10,
            offset: filters?.offset ?? 0,
            fromDate: filters?.fromDate ?? '',
            toDate: filters?.toDate ?? '',
        }
        return ExpensesRepository.getAllExpenses(defaultedFilters)
    },

    addExpense: (expenseData: CreateExpenseDto) => {
        return ExpensesRepository.createExpense(expenseData)
    },

    getExpenseById: (expenseId: number) => {
        return ExpensesRepository.getExpenseById(expenseId)
    },

    updateExpense: (expenseId: number, data: UpdateExpenseDto) => {
        return ExpensesRepository.updateExpense(expenseId, data)
    },

    async deleteExpense(id: number) {
        return ExpensesRepository.deleteExpense(id)
    },
}
