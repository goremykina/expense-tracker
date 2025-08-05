import express from 'express'
import { Request, Response } from 'express'
import { addExpense, getExpenses } from './expenses.service'
const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const expense = await addExpense(req.body)
        res.status(201).json(expense)
    } catch (e: unknown) {
        if (e instanceof Error) {
            res.status(400).json({ error: e.message })
        } else {
            res.status(400).json({ error: 'Unknown error' })
        }
    }
})

router.get('/', async (req: Request, res: Response) => {
    const expenses = await getExpenses()
    res.json(expenses)
})

export default router
