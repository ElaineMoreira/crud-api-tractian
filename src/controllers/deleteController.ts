import { Request, Response } from "express"
import todasAsInformacoes from "../models/usuarioPodeCadastrarModel";

const deleteController = {
  async deleteId(req: Request, res: Response){

    const { id } = req.params;
    await todasAsInformacoes.findByIdAndDelete(id)
      .then(data => {
        return res.json({ message: `${id} excluido com sucesso!` })
      })
      .catch(error => {
        return res.status(400).json(error.original)
      })
      }
    }

export { deleteController };