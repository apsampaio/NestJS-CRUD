<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h3 align="center">
    NestJS Study Case with Docker & PrismaORM
</h3>

<p align="center">
    <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
    <img alt="Node" src="https://img.shields.io/badge/Node.JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img alt="NESTJS" src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
    <img alt="Docker" src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
    <img alt="PostgreSQL" src="https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white">
    <img alt="Prisma" src="https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">
</p>

## Description

## 🚀 Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)
- [PrismaORM](https://www.prisma.io/)
- [Docker](https://www.docker.com/)

## 🔰 Installation

```bash
$ yarn
```

## 🐳 Docker Database Container

```bash
docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

## 🔥 Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## 🧨 Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## 📋 Note to self

```bash
# generate feature/resource
$ yarn nest g resource
```

## License

Nest is [MIT licensed](LICENSE).

Feito com 💙 por [Andre Sampaio](https://github.com/apsampaio) <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px">
