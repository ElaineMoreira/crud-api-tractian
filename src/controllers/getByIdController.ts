import { Request, Response } from "express"
import todasAsInformacoes from "../models/usuarioPodeCadastrarModel";

const getByIdController = {
  async getById(req: Request, res: Response): Promise<Response>{

    const { id } = req.params;
    const getById = await todasAsInformacoes.findById(id);
    return res.json(getById)
  }
}

export { getByIdController }