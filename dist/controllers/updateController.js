"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateController = void 0;
const usuarioPodeCadastrarModel_1 = __importDefault(require("../models/usuarioPodeCadastrarModel"));
const updateController = {
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, empresa, unidade, imagem, nomeAtivo, descricao, modelo, proprietario, status, nivelDeIntegridade } = req.body;
            yield usuarioPodeCadastrarModel_1.default.findByIdAndUpdate(id, {
                nome: nome,
                email: email,
                empresa: empresa,
                unidade: unidade,
                imagem: imagem,
                nomeAtivo: nomeAtivo,
                descricao: descricao,
                modelo: modelo,
                proprietario: proprietario,
                status: status,
                nivelDeIntegridade: nivelDeIntegridade
            })
                .then(data => {
                return res.json(data);
            })
                .catch(error => {
                return res.status(400).json(error.original);
            });
        });
    }
};
exports.updateController = updateController;
