import { Request, Response } from "express"

const getAllController = {
  async GetAll(req: Request, res: Response): Promise<Response>{
    let getAll = {};
    return res.json(getAll)
  }

}

export { getAllController }
