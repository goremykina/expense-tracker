import { NextFunction, Request, Response } from 'express'
import { logger } from '../logger'

export const errorHandler = (error: Error, req: Request, res: Response, _next: NextFunction): void => {
    logger.error('Error occurred:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        body: req.body,
    })

    res.sendStatus(500)
}
