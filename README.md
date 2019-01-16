# Learn Express

## Make Harry Potter Character API

## How to Use

Install dependencies:

```sh
yarn
```

Start server with `node`:

```sh
node index.js
```

Start with `nodemon`:

```sh
nodemon index.js
```

Access the endpoints via browser, httpie, or Postman.

## API Endpoints

Furnitures:

| Route                           | HTTP Verb | Description                  |
| ------------------------------- | --------- | ---------------------------- |
| `/characters`                   | `GET`     | Get all the furnitures       |
| `/characters/:id`               | `GET`     | Get a single furniture       |
| `/characters`                   | `POST`    | Save a new furniture         |
| `/characters/search?q=name` | `GET`     | Search furniture by name     |
| `/characters`                   | `DELETE`  | Remove all the furnitures    |
| `/characters/remove/:id`               | `DELETE`  | Remove a furniture           |
| `/characters/update/:id`               | `PATCH`     | Update an item with new info |

