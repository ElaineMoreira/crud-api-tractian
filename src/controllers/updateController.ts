import { Request, Response } from "express";
import usuarioPodeCadastrarModel from "../models/usuarioPodeCadastrarModel";


const updateController = {
  async update(req: Request, res: Response): Promise<Response>{

  const { id } = req.body;
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
  const updateAll = await usuarioPodeCadastrarModel.findByIdAndUpdate(id, req.body);
  return res.json(updateAll)
 }
}

export { updateController }