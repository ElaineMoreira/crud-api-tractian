"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
// const SENHA_SECRETA_ENV = process.env.SECRET_CONNECTION_MONGO
// const PORT = process.env.PORT
const PORT = 3003 || process.env.PORT;
// mongoose.connect(SENHA_SECRETA_ENV)
mongoose_1.default.connect('mongodb+srv://elainemoreira:trybe12345@cluster0.lev3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    /** se deu certo .*/
    .then((data) => {
    console.log("Conexão bem sucedida do MongoDB!", data.version);
})
    /** se der errado, me mostrar a mensagem de erro */
    .catch((error) => {
    console.log("Erro ao conectar no banco de dados!", error.message);
});
// app.listen(PORT, () => console.log(`Servidor da Elaine Online na porta ${PORT}!`))
app.listen(PORT, () => console.log(`Servidor da Elaine Online na porta ${PORT}`));
