import express from 'express'
import { Request, Response } from 'express'
import { ExpensesService } from './expenses.service'
import { validateExpenseCreation, validateExpenseUpdate } from '../helpers/middlewares/validator'
import { logger } from '../helpers/logger'
import { NotFoundException } from '../helpers/exeptions'

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

router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const expenseId = Number(id)
    const expense = await ExpensesService.getExpenseById(expenseId)
    if (!expense) {
        throw new NotFoundException('Expense not found')
    }
    logger.info('Get expense by id', { expense })
    res.json(expense)
})

router.patch('/:id', validateExpenseUpdate, async (req: Request, res: Response) => {
    const { id } = req.params
    const expenseId = Number(id)

    const existing = await ExpensesService.getExpenseById(expenseId)
    if (!existing) {
        throw new NotFoundException('Expense not found')
    }

    const updatedExpense = await ExpensesService.updateExpense(expenseId, req.body)
    logger.info('Expense updated', { updatedExpense })
    res.status(200).json(updatedExpense)
})

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const expenseId = Number(id)

    const existing = await ExpensesService.getExpenseById(expenseId)
    if (!existing) {
        throw new NotFoundException('Expense not found')
    }

    await ExpensesService.deleteExpense(expenseId)
    logger.info('Expense deleted', { expenseId })
    res.sendStatus(204)
})

export default router
