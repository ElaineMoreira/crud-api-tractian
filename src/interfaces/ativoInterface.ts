export interface ativoInterface {
  imagem: string,
  nome: string,
  descricao: string,
  modelo: string,
  proprietario: string,
  status:{
    execucao: string
    alerta: string
    parado: string
  },
  nivelDeIntegridade: number
}