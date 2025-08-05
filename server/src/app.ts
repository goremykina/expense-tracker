import express from 'express'
import { Request, Response } from 'express'
import expensesRouter from './expenses/expenses.controller'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.get('/ping', (req: Request, res: Response) => {
    res.send({ message: 'pooooong' })
})

app.use(express.json())
app.use('/expenses', expensesRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
