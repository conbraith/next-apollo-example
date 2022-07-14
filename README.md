# Next + Netlify Example - Connor Braithwaite

[![Netlify Status](https://api.netlify.com/api/v1/badges/46648482-644c-4c80-bafb-872057e51b6b/deploy-status)](https://app.netlify.com/sites/next-dev-starter/deploys)

This is a [Next.js](https://nextjs.org/) v12 project and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO). It includes an [Apollo/GraphQL backend](https://www.apollographql.com/) that communicates with [MongoDB](https://www.mongodb.com/) via [MongooseJS](https://mongoosejs.com/) and caches results via [Redis](https://redis.io/)

## Table of Contents:

- [Getting Started](#getting-started)
- [Installation options](#installation-options)
- [Testing](#testing)

## Getting Started

First, ensure Docker desktop is [installed](https://www.docker.com/products/docker-desktop/). Then, copy the `.env.example` in the root of the project to `.env` and run the following:

```bash
docker compose up
```

Next.js frontend can be accessed at [http://localhost:8000/](http://localhost:8000/)

Mongo Express can be accessed at [http://localhost:8081/](http://localhost:8081/)

GraphQL sandbox can be accessed at [http://localhost:8200/](http://localhost:8200/)

## Testing

### Included Default Testing

- [Renovate](https://www.mend.io/free-developer-tools/renovate/) - regularly update dependencies
- [Cypress](https://www.cypress.io/) - runs e2e tests
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests deploy process
