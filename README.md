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
  <img src="https://miro.medium.com/max/600/1*UniTjL05TA-vkvMXJFRdFg.png" alt="mongodbatlas" width="100" height="45"/>
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
