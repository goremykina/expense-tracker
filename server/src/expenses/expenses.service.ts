import { ExpensesRepository } from './expenses.repository'
import { CreateExpenseDto } from './dto/create-expense.dto'
import { logger } from '../helpers/Logger'

export const ExpensesService = {
    getExpenses: () => {
        logger.info('Fetching all expenses')
        return ExpensesRepository.getAllExpenses()
    },

    addExpense: (expenseData: CreateExpenseDto) => {
        logger.info('Adding new expense', { expenseData })
        return ExpensesRepository.createExpense(expenseData)
    },
}
