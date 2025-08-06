import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { ExpensesService } from './expenses.service'
import { validateExpense } from '../helpers/middlewares/validator'
import { logger } from '../helpers/Logger'
const router = express.Router()

router.post('/', validateExpense, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const expense = await ExpensesService.addExpense(req.body)
        logger.info('Expense created successfully', { expenseId: expense.id })
        res.status(201).json(expense)
    } catch (e: unknown) {
        if (e instanceof Error) {
            logger.error('Error creating expense', { message: e.message, stack: e.stack })
            res.status(400).json({ error: e.message })
            next(e)
        } else {
            logger.error('Unknown error creating expense', { error: e })
            res.status(400).json({ error: 'Unknown error' })
            next(e)
        }
    }
})

router.get('/', async (req: Request, res: Response) => {
    const expenses = await ExpensesService.getExpenses()
    logger.info('Fetched expenses', { expenses })
    res.json(expenses)
})

export default router
