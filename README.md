# Films API

## Introduction

A lightweight API written using [express](https://expressjs.com/), using [mongo](https://mongodb.com) and integration testing with [chai HTTP](http://chaijs.com/plugins/chai-http/)

## Prerequisites

- Node 7.6+ (for async / await support)
- Access to a local or remote Mongo Instance

## Setup & Running

DB Connection configuration is handled with [dotenv](https://www.npmjs.com/package/dotenv).  The [docs](https://www.npmjs.com/package/dotenv#should-i-commit-my-env-file) recommend **not adding this file to source control**.  Therefore, you'll need to create a `.env` file with your DB connection - something like:

```
DB_CONNECTION=mongodb://localhost/movies
```

Install dependencies:

```
npm install
```

Seed Database:

```
npm run seed-db
```

Start the app:

```
npm start
```

Run the tests:

```
npm test
```