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
exports.createController = void 0;
const usuarioPodeCadastrarModel_1 = __importDefault(require("../models/usuarioPodeCadastrarModel"));
const createController = {
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, empresa, unidade, imagem, nomeAtivo, descricao, modelo, proprietario, status, nivelDeIntegridade, } = req.body;
            let create = yield usuarioPodeCadastrarModel_1.default.create(req.body);
            return res.json(create);
        });
    }
};
exports.createController = createController;
