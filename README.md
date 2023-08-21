# Welcome to Flights Service

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

 - Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create
 and then execute

  `npx sequelize db:migrate`
 ` 


## Database Design
  
   - Airplane Table
       - ID
       - model_number
       - capacity
       - created_at
       - updated_at

   - Flights Table
       - ID
       - src_airport_id
       - dest_airport_id
       - departure
       - arrival
       - flight_number
        
   - Airport Table
       - ID
       - name
       - city_id
       - address 

   - City Table
       - ID
       - name

- A flight belong to a an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city
- One airports can have many flights, but a flight belongs to one airport.
