export interface usuarioPodeCadastrar {
  id: number,
  nome: string,
  email: string,
  empresa: string,
  unidade: string,
  ativo: {
    imagem: string,
    nomeAtivo: string,
    descricao: string,
    modelo: string,
    proprietario: string,
    status: string,
    nivelDeIntegridade: number,
  },
}

// export interface usuario extends usuarioPodeCadastrar {
//     nome: string,
//     email: string,
// }