### Banco de dados
Optamos por utilizar o banco de dados relacional MySQL

está rodando na porta `3306`

para executar `docker-compose up`

### API
Estamos utilizando NodeJs, Express e Prisma

instale as dependencias `npm install`

está rodadndo na porta `3000`

para executar `node ./app.js`

### Contribuição
Quando for executar alguma mudança nas tabelas do banco:
deve mexer em `./backend/prisma/schema.prisma`

logo após rode o comando `npx prisma db push`

`cd ./backend`
`touch .env`
Colar a url DATABASE_URL="mysql://user:123@localhost:3306/db"
