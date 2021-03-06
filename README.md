# meal-app
Accepts lists of MEAL IDs that exist in `https://themealdb.com/api.php` and returns the id with the least number of ingredients

## Table of Contents

- [Description of features](#description-of-feature)
  - [LIST OF MEAL IDS](#list-of-meal-Ids)
  - [RESPONSES](#Responses)

## Setup

### Dependencies

list of libraries, tools, and technologies used.

- [express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Node.js](https://nodejs.org/en/) - A JavaScript runtime environment
- [Docker](https://www.docker.com/) - For container
- A package manager - [[NPM]](https://www.npmjs.com/)

### Getting Started

- clone the repo - `https://github.com/DinmaOtutu/meal-app.git`
- cd meal-app.
- docker build -t meal-app .
- docker run -it -p 8080:8080 meal-app
- If you do not have docker installed, run `npm install`
- run `npm start`

# Description of features


## LIST MEAL IDS
- Navigate to `https://themealdb.com/api.php` get list of meal IDS, pass it as an array in the request body on postman, it returns the meal with the least number of ingredients 

```
POST REQUEST
{
    "mealIds" : [id1, id2, .......]
}
localhost:8080/api/meal
```

## RESPONSES
- 200 : Success
![image](https://user-images.githubusercontent.com/39683587/55661352-507c9980-5803-11e9-8666-0c354caeb457.png)

- 400 : Invalid meal Id
![image](https://user-images.githubusercontent.com/39683587/55661375-6a1de100-5803-11e9-9dc9-60f834af4b1e.png)

- 400 : Invalid input
![image](https://user-images.githubusercontent.com/39683587/55661385-799d2a00-5803-11e9-92cf-c70e31ef7e94.png)

- 500 : Internal server error


## AUTHOR
- Yours truly DinmaOtutu
