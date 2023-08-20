# welcome to Flights Service

## Project Setup

 - Clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloaded project.
 - Create a `.env` file in the root directory and ass the following environmenr variable
 - `PORT=3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

 ```
 {
  "development": {
    "username": <YOUR_DB_NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "airline_ticket_database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```