import { Schema } from 'mongoose'
import mongoose from 'mongoose';

const usuarioPodeCadastrarModel = new Schema({
  nome: String,
  email: String,
  empresa: String,
  unidade: String,
  imagem: String,
  nomeAtivo: String,
  descricao: String,
  modelo: String,
  proprietario: String,
  status: String,
  nivelDeIntegridade: Number,
  
}, { timestamps: true, versionKey: false, })

export default mongoose.model('todasAsInformacoes', usuarioPodeCadastrarModel)
