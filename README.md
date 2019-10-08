# MovieSeries
Aplicação de Gerenciamento de Filmes e Séries que você já assistiu.

Projeto criado com intuito de entender as features do AngularJS 2 e do Node JS.

---
Faça o download do projeto com:
```
git clone https://github.com/mamrodrigues/movieseries.git
```

Para realizar o build a aplicacação e download das dependências, abrir a pasta `client` e executar o comando:
O mesmo comando deve ser executado na pasta `server`:
```
npm install
```

Em seguida, para inicializar o server, executar o seguinte comando na pasta `server`.
Caso haja algum desenvolvimento a ser realizado no client, também executar o comando na pasta `client`.
Isso fará com que o Transpiler fique "escutando" as mudanças realizadas no TypeScript e "transformando-as" em JavaScript durante o desenvolvimento.
```
npm start
```
---

Este comando irá subir um server na porta 5000 que será a porta da aplicação.
Como existe um config do server que aponta para o client, essas mudanças já são alteradas sem necessidade de restartar o servidor.

---
## Construído com

* [Angular 2](https://devdocs.io/angular~2/) - Client
* [NodeJS](https://nodejs.org/en/docs/) - Server

---
## Autor
* **Marcos Magalhães** - [mamrodrigues](https://github.com/mamrodrigues)
