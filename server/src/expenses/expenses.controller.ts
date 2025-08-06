import express from 'express'
import { Request, Response } from 'express'
import { ExpensesService } from './expenses.service'
import { validateExpenseCreation } from '../helpers/middlewares/validator'
import { logger } from '../helpers/logger'

const router = express.Router()

router.post('/', validateExpenseCreation, async (req: Request, res: Response) => {
    const expense = await ExpensesService.addExpense(req.body)
    logger.info('Expense created successfully', { expenseId: expense.id })
    res.status(200).json(expense)
})

router.get('/', async (req: Request, res: Response) => {
    const { limit, offset, fromDate, toDate } = req.query

    const filters = {
        limit: limit ? Number(limit) : undefined,
        offset: offset ? Number(offset) : undefined,
        fromDate: typeof fromDate === 'string' ? fromDate : undefined,
        toDate: typeof toDate === 'string' ? toDate : undefined,
    }

    const expenses = await ExpensesService.getExpenses(filters)
    logger.info('Fetched expenses', { expenses, filters })
    res.json(expenses)
})

export default router
