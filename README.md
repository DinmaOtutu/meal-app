# meal-app
Accepts lists of MEAL IDs that exist in `https://themealdb.com/api.php` and returns the id with the least number of ingredients

## Table of Contents

- [Description of features](#description-of-feature)
  - [LIST OF MEAL IDS](#list-of-meal-Ids)

## Setup

### Dependencies

list of libraries, tools, and technologies used.

- [express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment
- [Docker](https://www.docker.com/) - For container
- A package manager - [[NPM](https://www.npmjs.com/)

### Getting Started

- clone the repo - `https://github.com/DinmaOtutu/meal-app.git`
- cd meal-app.
- docker build -t meal-app .
- docker run -it -p 8080:8080 meal-app

# Description of features


## LIST MEAL IDS
- Navigate to `https://themealdb.com/api.php` get list of meal IDS, pass it as an array in the request body on postman, it returns the meal with the least number of ingredients 

```
POST REQUEST
{
    "mealIds" : [numbers, numbers, .......]  "password" : "superagent password"
}
localhost:8080/api/meal
```

## AUTHOR
- Yours truly DinmaOtutu