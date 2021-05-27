# User Authentication
Este projeto foi desenvolvido em prol de estudos na parte de autenticação de usuario em React.js.

## Informações Técnica
A aplicação foi desenvolvida em cima de uma framework React chamada [Next.js](https://nextjs.org/).

### O que foi utilizado?
- [Typescript](https://www.typescriptlang.org/):
Superset para criação de interfaces tipadas.
- [Bcrypt](https://www.npmjs.com/package/bcrypt):
Lib utilizada para hash de password com mais seguraças.
- [Json Web Token (JWT)](https://jwt.io/):
Para criação de token com criptografia utilizada como chave de autenticação.
- [Cookies](https://www.npmjs.com/package/cookie):
Lib para serialização e deserialização de cookies

### Fluxo da Aplicação:
![Alt text](/public/flow.jpg?raw=true "System Flow")

## Como rodar a aplicação?
Vamos rodar a aplicação localmente.
Com [node](https://nodejs.org/en/) instalado, rode o seguinte comando no seu terminal na pasta root.

```bash
npm run dev
# Caso utilize Yarn
yarn dev
```

Abra no seu navegador [http://localhost:3000](http://localhost:3000) para ver o resultado.
