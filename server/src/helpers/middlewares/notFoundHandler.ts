import { Request, Response } from 'express'
import { logger } from '../logger'

export const notFoundHandler = (req: Request, res: Response): void => {
    logger.warn('Not Found:', {
        url: req.url,
        method: req.method,
    })
    res.sendStatus(404)
}
