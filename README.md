# node-database-template

## Requisitos
### Para funcionar é necessário installar o mysql, banco de dados usado neste exemplo
### Também é necessário ter yarn instalado

### Execute os comandos abaixo após fazer clone do repositório

#### yarn install ou somente yarn no diretório do projeto

#### depois substitua no config/mysql_config.json o item user e password pelo seu respectivo usuário e senha do seu banco

#### yarn ts-node .\src\server.ts

#### Pronto, o servidor estará rodando e respondendo as requisições pelo browser

## Sobre o banco de dados

#### O banco consiste de uma tabela chamada groceries contendo os campos id e item 

#### para consultar os dados retornados pelo banco, o servidor responderá na rota /groceries

#### Ex.: localhost:3000/groceries

#### será listado todos os registros da tabela
