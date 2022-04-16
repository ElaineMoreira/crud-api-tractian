import express, { Response, Request } from 'express'
import mongoose from 'mongoose'
require('dotenv').config();

const app = express()

// mongoose.connect('mongodb+srv://elainemoreira:trybe12345@cluster0.lev3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect(process.env.SECRET_CONNECTION_MONGO)
/** se deu certo */
  .then((data) => {
    console.log("Conexão bem sucedida do MongoDB!")
  })
/** se der errado, me mostrar a mensagem de erro */
  .catch((error) => {
    console.log("Erro ao conectar no banco de dados!", error.message)
  })

app.get('/', (req: Request, res: Response) => {
  return res.send('Oi Elaine, só pra testar!')
});

app.listen(3333, () => console.log(`Servidor da Elaine Online na porta 3333!`))
