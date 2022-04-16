import express from 'express'
import mongoose from 'mongoose'
import router from './routes/routes';
require('dotenv').config();

const app = express()

app.use(express.json());
app.use(router)

mongoose.connect(process.env.SECRET_CONNECTION_MONGO)
/** se deu certo */
  .then((data) => {
    console.log("Conexão bem sucedida do MongoDB!", data.version)
  })
/** se der errado, me mostrar a mensagem de erro */
  .catch((error) => {
    console.log("Erro ao conectar no banco de dados!", error.message)
  })

app.listen(3333, () => console.log(`Servidor da Elaine Online na porta 3333!`))
