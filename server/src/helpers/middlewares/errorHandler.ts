import { NextFunction, Request, Response } from 'express'
import { logger } from '../logger'
import { HttpException } from '../exeptions'

export const errorHandler = (error: Error, req: Request, res: Response, _next: NextFunction): void => {
    logger.error('Error occurred:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        body: req.body,
    })

    if (error instanceof HttpException) {
        logger.error(`Error ${error.statusCode}: ${error.message}`, { details: error.details, stack: error.stack })

        res.status(error.statusCode).json({
            error: error.message,
            details: error.details || null,
        })
        return
    }

    logger.error('Unhandled error', { error: error })

    res.status(500).json({
        error: 'Internal Server Error',
    })
}
