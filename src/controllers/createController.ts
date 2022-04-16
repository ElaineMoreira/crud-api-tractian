import { Request, Response } from "express"
import usuarioPodeCadastrarModel from "../models/usuarioPodeCadastrarModel";

const createController = {
  async createPost(req: Request, res: Response): Promise<Response>{

    const {
      nome,
      email,
      empresa,
      unidade,
      imagem,
      nomeAtivo,
      descricao,
      modelo,
      proprietario,
      status,
      nivelDeIntegridade,
    } = req.body;

    let create = await usuarioPodeCadastrarModel.create(req.body);
    return res.json(create)
  }
}

export { createController }
