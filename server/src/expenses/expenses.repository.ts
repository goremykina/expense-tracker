import db from '../db/db.service'

export interface Expense {
    id?: number
    name: string
    amount: number
    currency: string
    category: string
    date: string
}

export function insertExpense(expense: Omit<Expense, 'id'>): Expense {
    const stmt = db.prepare(`
    INSERT INTO expenses (name, amount, currency, category, date)
    VALUES (?, ?, ?, ?, ?)
  `)

    const result = stmt.run(expense.name, expense.amount, expense.currency, expense.category, expense.date)

    return {
        id: Number(result.lastInsertRowid),
        ...expense,
    }
}

export function selectAllExpenses(): Expense[] {
    const stmt = db.prepare(`
    SELECT * FROM expenses ORDER BY date DESC
  `)
    return stmt.all() as Expense[]
}
