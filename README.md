<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">Projeto Back-end em <a href="http://nestjs.com/" target="_blank">NestJS</a> com <a href="http://docker.com" target="_blank">Docker</a> e <a href="http://www.prisma.io/" target="_blank">Prisma</a>para o desafio realizado no estágio da <a href="https://compass.uol/en/home/" target="_blank">Compass.UOL</a>.</p>


## Tecnologias usadas

**[Nest]**: NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor. 

**[TypeScript]**: linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.

**[Docker]**: Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.

**[Prisma]**: O Prisma é um ORM (Object-Relational Mapping) que ajuda os desenvolvedores a criar aplicações mais rapidamente e cometer menos erros com um kit de ferramentas de banco de dados opensource, como PostgreSQL e MySQL. 

**[PostgreSQÇ]** PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.

## Instalação

```bash
$ npm install
```

## Iniciando o servidor (deve ser seguida a ordem abaixo)

```bash
# docker
$ Docker compose up

# Prisma
$ npx prisma migrate dev

# Prisma seed
$ npm run prisma:seed

# development
$ npm run start:dev
```


<p align="center">
  Desenvolvidor por Hallan Pedrosa Ferreira
</p>
