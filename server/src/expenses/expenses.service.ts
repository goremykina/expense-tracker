import { insertExpense, selectAllExpenses, Expense } from './expenses.repository'

export function createExpense(data: Omit<Expense, 'id'>): Expense {
    if (!data.name || data.amount <= 0) {
        throw new Error('Invalid expense data')
    }

    return insertExpense(data)
}

export function getExpenses(): Expense[] {
    return selectAllExpenses()
}
