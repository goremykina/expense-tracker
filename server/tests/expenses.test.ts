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

    it('should get expenses filtered by date', async () => {
        const fromDate = new Date('2023-01-01').toISOString()
        const toDate = new Date('2024-01-01').toISOString()

        const expenses = await ExpensesService.getExpenses({ fromDate, toDate })

        expect(Array.isArray(expenses)).toBe(true)
        expenses.forEach((exp) => {
            expect(new Date(exp.date) >= new Date(fromDate)).toBe(true)
            expect(new Date(exp.date) <= new Date(toDate)).toBe(true)
        })
    })

    it('should get an expense by ID', async () => {
        const expenseData: CreateExpenseDto = {
            name: 'Milk',
            amount: 4.2,
            currency: 'USD',
            category: 'Food',
            date: new Date().toISOString(),
        }

        const createdExpense = await ExpensesService.addExpense(expenseData)
        const fetchedExpense = await ExpensesService.getExpenseById(createdExpense.id)

        expect(fetchedExpense).not.toBeNull()
        expect(fetchedExpense?.id).toBe(createdExpense.id)
        expect(fetchedExpense?.name).toBe('Milk')
    })

    it('should return null if expense not found', async () => {
        const nonExistentId = 999999
        const result = await ExpensesService.getExpenseById(nonExistentId)
        expect(result).toBeNull()
    })
})
