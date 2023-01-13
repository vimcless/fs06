# Atividade Backend 10/01/2022

Fork do API RESTful feito por Alessandro e modificado para adicionar a tabela de produtos, permitir que a api possa utilizar CRUD e relaciona-la com clientes.

## Tecnologias
- NodeJS 18.13.0
- Express 4.18.2
- Mariadb 10.6.11

## Instalação
Para executar a aplicação é necessário baixar os arquivos contidos no repositório `https://github.com/vimcless/fs06.git` e executar o comando `npm update`.

## Modificações

- Criado a API cujo endereço é http://localhost:8000/produtos
- Criado GET utilizando clientes com interação com produtos (ex. http://localhost:8000/clientes/1/produtos)



--------------------------------------------------

# API REST
> API REST feita para aprender ExpressJS e Banco de Dados

## Tecnologias
- NodeJS v16
- Express v4.18
- MySQL/MariaDB v8

## Instalação
Para baixar a aplicação execute o seguinte comando em seu terminal:
`git clone https://github.com/digitalcollege-fortal/fs06.git`

Após baixar a aplicação, entre no diretório dela através do terminal e execute:
`npm install` ou `npm i`

## Configuração do Banco de Dados
É necessário configurar as credenciais do banco de dados.

### Estrutura do banco de dados
Acesse o cliente de terminal do seu banco de dados.

> Copie e execute os comandos que estão no arquivo `/db.sql`

### Credenciais
Abra o arquivo que se encontra no caminho 
`/src/connection/databaseConnection.js`

E edite as seguintes linhas de acordo com suas credencias do banco:

```js
{
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fs06_api'
}
```
### Executar o projeto
Para executar o projeto, no diretório da aplicação através do terminal execute:

`nodemon index.js` ou `node index.js`

Sua API estará disponível nos endereços:
- http://localhost:8000/clientes
- http://localhost:8000/veiculos

