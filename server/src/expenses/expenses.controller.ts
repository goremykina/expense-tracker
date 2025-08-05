import express from 'express'
import { Request, Response } from 'express'

import { createExpense, getExpenses } from './expenses.service'

const router = express.Router()

router.post('/', (req: Request, res: Response) => {
    try {
        const expense = createExpense(req.body)
        res.status(201).json(expense)
    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(400).json({ error: e.message })
        } else {
            res.status(400).json({ error: 'Unknown error' })
        }
    }
})

router.get('/', (req: Request, res: Response) => {
    const expenses = getExpenses()
    res.json(expenses)
})

export default router
