"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const usuarioPodeCadastrarModel = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = mongoose_2.default.model('todasAsInformacoes', usuarioPodeCadastrarModel);
