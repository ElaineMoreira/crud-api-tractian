import { Request, Response } from "express"
import todasAsInformacoes from "../models/usuarioPodeCadastrarModel";

const updateController = {
  async update(req: Request, res: Response) {

    const { id } = req.params;

    const { nome,
      email,
      empresa,
      unidade,
      imagem,
      nomeAtivo,
      descricao,
      modelo, 
      proprietario, 
      status, 
      nivelDeIntegridade
    } = req.body;

    await todasAsInformacoes.findByIdAndUpdate(id, {
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
        return res.json(data)
      })
      .catch(error => {
        return res.status(400).json(error.original)
      })
  }
}

export { updateController }
