import { Request, Response } from 'express'
import { logger } from '../Logger'

export const errorHandler = (error: Error, req: Request, res: Response): void => {
    logger.error('Error occurred:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        body: req.body,
    })

    res.status(500).json({
        error: error.message || 'Internal Server Error',
    })
}

export const notFoundHandler = (req: Request, res: Response): void => {
    res.status(404).json({
        error: 'Not Found',
    })
}
