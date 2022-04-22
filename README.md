# crud_TRACTIAN

<h3>Imagine a seguinte situação:<h3>
<br/>

Nossos usuários, Emerson e Roberta, são gerentes de manutenção da Industria Freios Supremos (fabricante de autopeças), e possuem 2 unidades e 10 ativos (máquinas) no total. Eles gostariam de poder registrar e visualizar ambas as unidades separadamente, bem como ter uma visão geral que condensa os dados das duas unidades.

Desafio
</br>

Construa um CRUD onde o usuário possa cadastrar empresas, unidades, ativos e usuários.

    • Existem três tipos de status: Em execução, Alerta, Parado;
    • O nível de saúde precisa estar entre 0% e 100%.


<h2 id="features">⚙ Recursos</h2>
</br>

- Usuário pode cadastrar, deletar, atualizar e buscar empresas, unidades ativos e usuarios.

<h2 id="Tecnologia">💻 Tecnologias utilizadas</h2>
</br>
  
<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="node" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mongodb/mongodb-original.svg" alt="mongo" width="40" height="40"/>
  <img src="data:image/png;base64,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" alt="mongodbatlas" width="100" height="45"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/docker/docker-original.svg" alt="docker" width="40" height="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/heroku/heroku-original.svg" alt="heroku" width="40" height="40"/>
   <img src=https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png alt="insomnia" width="40" height="40"/>

<br/>
</div>

<h3>👨‍💻 Executando</h3>
</br>

Para executar o aplicativo, siga estas instruções.
</br>
</br>

<h2 id="prerequisites">Pré-requisitos</h2>
</br>

<h3 id="installation">Instalação</h3>
</br>

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

6. Para visualizar itens que já estão no banco de dados digite no navegador

   ```
   https://crud-api-tractian.herokuapp.com/all
   ```   

7. Para visualizar itens que já estão no banco de dados buscados por id digite o exemplo abaixo no navegador

   ```
   https://crud-api-tractian.herokuapp.com/all/626069c8cba207d2f524e918
   ```

9. Como fica a estrutura dos dados

 ```
{
	"_id": "626069c8cba207d2f524e918",
	"nome": "flocos ",
	"email": "elaine@email.com",
	"empresa": "vivo",
	"unidade": "belo horizonte",
	"imagem": "foto",
	"nomeAtivo": "tim",
	"descricao": "descricao",
	"modelo": "modelo7",
	"proprietario": "elaine",
	"status": "em alerta",
	"nivelDeIntegridade": 70,
	"createdAt": "2022-04-20T20:15:04.717Z",
	"updatedAt": "2022-04-20T20:15:04.717Z"
}
```
<br/>
8. Para criar, atualizar e deletar dados no banco, aconselha-se a utilização do Insomnia para melhor visualização.   
<br/>  
<br/>

---

<h2 id="contacts">📫 Contacts</h2>
    
<h3>Este projeto foi feito por:</h3>
<ul>
    <li>
      <a href="https://github.com/ElaineMoreira" target="_blank">
        <img src="https://img.shields.io/badge/-Elaine Moreira-black?style=flat&logo=Github&logoColor=white">
      </a>
    </li>
    <li>
        <a href="https://elainemoreira.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/-Portifolio-%230077B5?style=for-the-badge&logo=portifolio&logoColor=white" target="_blank"></a>
    </li>
</ul>

---
