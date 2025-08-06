import { ExpensesService } from '../src/expenses/expenses.service'
import { CreateExpenseDto } from '../src/expenses/dto/create-expense.dto'

describe('ExpensesService', () => {
    it('should create an expense', async () => {
        const expenseData: CreateExpenseDto = {
            name: 'Bread',
            amount: 8.5,
            currency: 'USD',
            category: 'Food',
            date: new Date().toISOString(),
        }

        const expense = await ExpensesService.addExpense(expenseData)

        expect(expense).toHaveProperty('id')
        expect(expense.name).toBe('Bread')
        expect(Number(expense.amount)).toBe(8.5)
    })

    it('should get all expenses', async () => {
        const expenses = await ExpensesService.getExpenses()
        expect(Array.isArray(expenses)).toBe(true)
    })
})
