# Node-Typescript-MySQL
Projeto criado para fins de estudos. Neste mini-projeto foi possível aprender os conceitos:

- Node com Typescript;
- Riquisições HTTP;
- Transactions;
- Middleware;
- Migrations;
- ORM utilizando Knex;
- Criação de container no Docker.

## Run
- Navegue até a pasta dev do projeto e rode o comando:
```
docker-compose up
```
  Para inicia o container do mysql;
 
 - Na raiz do projeto rode as migrations do projeto:
 ```
 npm run knex:migrate  
 ```
 - Em seguida, rode as seeds do projeto:
 ```
 npm run knex:seed     
 ```
 - Instale as dependências do projeto:
 ```
 npm i
 ```
 - Rode o comando para iniciar a aplicação:
 ```
 npm run dev
 ```
 - O projeto rodará no endereço:
 ```
http://localhost:3333/
```

## REST endpoints
POST http://localhost:3333/locations
```JSON
{
    "image":"fake.png",
    "name": "recicla",
    "email": "teste@email.com",
    "whatsapp": "99999999",
    "latitude": -23.0000023,
    "longitude": -43.365895,
    "city": "Rio de Janeiro",
    "uf": "RJ",
    "items": [1,2,3]
}
```
GET http://localhost:3333/locations/:id

GET http://localhost:3333/items


