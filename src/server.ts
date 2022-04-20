import express from 'express'
import mongoose from 'mongoose'
import router from './routes/routes';
import "dotenv/config";

const app = express()

app.use(express.json());
app.use(router)

const SENHA_SECRETA_ENV = process.env.SECRET_CONNECTION_MONGO
// const PORT = process.env.PORT
const PORT = 3003 || process.env.PORT

mongoose.connect('mongodb+srv://elainemoreira:trybe12345@cluster0.lev3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// mongoose.connect(`${SENHA_SECRETA_ENV}`)
/** se deu certo .*/
  .then((data) => {
    console.log("Conexão bem sucedida do MongoDB!", data.version)
  })
/** se der errado, me mostrar a mensagem de erro */
  .catch((error) => {
    console.log("Erro ao conectar no banco de dados!", error.message)
  })

// app.listen(PORT, () => console.log(`Servidor da Elaine Online na porta ${PORT}!`))
app.listen(PORT, () => console.log(`Servidor da Elaine Online na porta ${PORT!}`))
