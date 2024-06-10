<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>
<h1 align="center">Nest Pokedex</h1>

#### Stack used

-   TypeScript
-   NestJS
-   MongoDB
-   Docker

<br>

> Run in development mode

1. Install the Nest CLI

```
npm install -g @nestjs/cli
```

2. build, (re)create, and start the containers in detached mode

```
docker-compose up -d
```

3. Install the dependencies

```
npm install
```

4. Run the application

```
npm run start:dev
```

> Open postman and do a request to `http://localhost:3000/api/v2/seed` to seed the database with the pokemons

## Production Build

1. Create file `.env.prod`

2. Create the docker image

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

3. If the image is already created, just run

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

> Open postman and do a request to `http://localhost:3000/api/v2/seed` to seed the database with the pokemons
