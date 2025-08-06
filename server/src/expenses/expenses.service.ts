import { ExpensesRepository } from './expenses.repository'
import { CreateExpenseDto } from './dto/create-expense.dto'

export const ExpensesService = {
    getExpenses: (filters: { limit?: number; offset?: number; fromDate?: string; toDate?: string }) => {
        const defaultedFilters = {
            limit: filters.limit ?? 10,
            offset: filters.offset ?? 0,
            fromDate: filters.fromDate ?? '',
            toDate: filters.toDate ?? '',
        }
        return ExpensesRepository.getAllExpenses(defaultedFilters)
    },

    addExpense: (expenseData: CreateExpenseDto) => {
        return ExpensesRepository.createExpense(expenseData)
    },
}
