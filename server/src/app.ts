import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Request, Response } from 'express'
import expensesRouter from './expenses/expenses.controller'
import { errorHandler } from './helpers/middlewares/errorHandler'
import { notFoundHandler } from './helpers/middlewares/notFoundHandler'

const app = express()
const port = process.env.PORT || 3001

app.get('/ping', (req: Request, res: Response) => {
    res.send({ message: 'pong' })
})

app.use(express.json())
app.use('/api/expenses', expensesRouter)

app.use(errorHandler)
app.use(notFoundHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
