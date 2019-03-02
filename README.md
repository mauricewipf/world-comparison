# World Comparison

An introductory project to [Nest](https://github.com/nestjs/nest). It uses the [restcountries.eu API](https://restcountries.eu/#sources) to demonstrate HTTP GET-Requests.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

The server starts on [localhost:3000](http://localhost:3000). You may want to change the port in `src/main.ts`.

## REST endpoints

The app listens to two routes:

`GET /`

A default route for demonstration purposes.

Returns: {string} "Hello World!"

`GET /density`

Compares two countries' population density

Query Params

- `country1`: A country name according to restcountries.eu Interface
- `country2`: A country name according to restcountries.eu Interface

Returns: {string}

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

The contents of this repository are covered under the [MIT License](https://github.com/udacity/ud777-writing-readmes/blob/master/LICENSE).
