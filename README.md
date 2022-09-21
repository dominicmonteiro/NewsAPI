# News API

### O projeto está configurado da seguinte forma:
1. Para rodar a aplicação é necessário rodar os seguintes comandos: `npm i` e, em seguida, `npm run start`. A aplicação ficará disponível na porta 8080.
2. O swagger está localizado em [http://localhost:8080/swagger](http://localhost:8080/swagger)
3. Para rodar os testes unitários é necessário rodar o comando `npm run test`

### Tecnologias usadas
1. NodeJS
2. Express
3. Swagger
4. Jest
5. Supertest
6. Axios
7. Dotenv

### Arquitetura
1. A arquitetura utilizada foi a MVC (Model, View, Controller).
2. A camada de controller é responsável por receber as requisições e enviar para a camada de service.
3. A camada de service é responsável por receber as requisições da camada de controller e enviar para a camada de repository.
4. A camada de repository é responsável por receber as requisições da camada de service e enviar para a camada de model.
5. A camada de model é responsável por receber as requisições da camada de repository e enviar para o banco de dados.
6. A camada de view é responsável por receber as requisições da camada de controller e enviar para o usuário.
