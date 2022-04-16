import express, { Response, Request } from 'express'

const app = express()

app.get('/', (req: Request, res: Response) => {
  return res.send('Oi Elaine, só pra testar!')
})

app.listen(3333, () => console.log(`Servidor da Elaine Online na porta 3333!`))
