# crud_TRACTIAN

<h3 id="features">⚙ Recursos</h3>

- Usuário pode cadastrar, deletar, atualizar e buscar empresas, unidades ativos e usuarios.

<h3 id="techs">💻 Techs</h3>
  
<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg" alt="mongo" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg" alt="docker" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/heroku/heroku-original.svg" alt="heroku" width="40" height="40"/>

<br/>
</div>

<h3>👨‍💻 Executando</h3>

Para executar o aplicativo, siga estas instruções.

<h3 id="prerequisites">Pré-requisitos</h3>

<h3 id="installation">Instalação</h3>

1. Para clonar o repositório (HTTPS or SSH)
   ```sh
   https://github.com/ElaineMoreira/crud_api_tractian.git
   ```
    
   ```sh
   git@github.com:ElaineMoreira/crud_api_tractian.git
   ```

2. Acesse as pastas de back-end e instale as dependências

   ```sh
   cd crud_api_tractian/
   npm install
   cd ..
   ```

3. Para subir o servidor e logar no banco em javascript

   ```sh
   npm start

   ```

4. Para subir o servidor e logar no banco em typescript tranpilado

   ```sh
   npm run dev
   ```
5. Para subir o servidor e logar no banco com docker

   ```
   npm run docker:up
   ```

Imagine a seguinte situação:

Nossos usuários, Emerson e Roberta, são gerentes de manutenção da Industria Freios Supremos (fabricante de autopeças), e possuem 2 unidades e 10 ativos (máquinas) no total. Eles gostariam de poder registrar e visualizar ambas as unidades separadamente, bem como ter uma visão geral que condensa os dados das duas unidades.

Desafio

Construa um CRUD onde o usuário possa cadastrar empresas, unidades, ativos e usuários.

Importante:
    • Cada ativo deve ter uma imagem, nome, descrição, modelo, proprietário, status e nível de integridade;
    • Cada ativo faz parte de uma unidade;
    • Cada unidade faz parte de uma empresa;
    • Cada usuário faz parte de uma empresa;
    • Existem três tipos de status: Em execução, Alerta, Parado;
    • O nível de saúde precisa estar entre 0% e 100%.

---

<h2 id="contacts">📫 Contacts</h2>
    
<h3>Este projeto foi feito por:</h3>
<ul>
    <li>
      <a href="https://github.com/ElaineMoreira" target="_blank">
        <img src="https://img.shields.io/badge/-Elaine Moreira-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
</ul>

---
