import { Request, Response, NextFunction } from 'express'

const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export const validateExpenseCreation = (req: Request, res: Response, next: NextFunction) => {
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

    if (!date || typeof date !== 'string' || !dateRegex.test(date)) {
        errors.push('Invalid or missing date (expected format YYYY-MM-DD)')
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}

export const validateExpenseUpdate = (req: Request, res: Response, next: NextFunction) => {
    const { name, amount, currency, category, date } = req.body
    const errors: string[] = []

    if (name && (typeof name !== 'string' || name.trim() === '')) {
        errors.push('Invalid or missing name')
    }

    if (amount && (typeof amount !== 'number' || amount <= 0)) {
        errors.push('Invalid amount')
    }

    if (currency && typeof currency !== 'string') {
        errors.push('Invalid currency')
    }

    if (category && typeof category !== 'string') {
        errors.push('Invalid category')
    }

    if (date && (typeof date !== 'string' || !dateRegex.test(date))) {
        errors.push('Invalid date (expected format YYYY-MM-DD)')
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors })
    }

    next()
}
