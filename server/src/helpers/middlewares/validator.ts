import { Request, Response, NextFunction } from 'express'

export const validateExpense = (req: Request, res: Response, next: NextFunction) => {
    const { name, amount, currency, category, date } = req.body
    const errors: string[] = []

    if (!name || typeof name !== 'string') {
        errors.push('Invalid or missing name')
    }

    if (amount <= 0 || typeof amount !== 'number') {
        errors.push('Invalid or missing amount')
    }

    if (!currency || typeof currency !== 'string') {
        errors.push('Invalid or missing currency')
    }

    if (!category || typeof category !== 'string') {
        errors.push('Invalid or missing category')
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!date || typeof date !== 'string' || !dateRegex.test(date)) {
        errors.push('Invalid or missing date (expected format YYYY-MM-DD)')
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}
