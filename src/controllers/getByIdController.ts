import { Request, Response } from "express"
import usuarioPodeCadastrarModel from "../models/usuarioPodeCadastrarModel";

const getByIdController = {
  async getById(req: Request, res: Response): Promise<Response>{

    const { id } = req.body;
    const getById = await usuarioPodeCadastrarModel.findOne(id);
    return res.json(getById)
  }
}

export { getByIdController }