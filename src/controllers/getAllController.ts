import { Request, Response } from "express"
import usuarioPodeCadastrarModel from "../models/usuarioPodeCadastrarModel";

const getAllController = {
  async GetAll(req: Request, res: Response): Promise<Response>{

    const getAll = await usuarioPodeCadastrarModel.find();
    return res.json(getAll)
  }
}

export { getAllController }
