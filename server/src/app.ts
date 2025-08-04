import express from 'express'
import { Request, Response } from 'express'

const app = express()
const port = 3001

app.get('/ping', (req: Request, res: Response) => {
    res.send({ message: 'pong' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
