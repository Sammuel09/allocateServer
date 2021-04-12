# Allocate Server service

This service is a REST API service that returns the number of servers needed to host a non-empty collection of viurtual machines.

## Getting Started

### Running locally

- Clone this repo.
- Run `npm install` to install all dependencies.
- Run `npm start` to start the server locally.
- Using Postman, send a request to `http://localhost:8080/server` with request body in this shape :
  {
  "virtualMachines": [
  {"cpu": 2, "ram": 32, "hdd":100},
  {"cpu": 1, "ram": 16, "hdd":10},
  {"cpu": 2, "ram": 32, "hdd":100},
  {"cpu": 3, "ram": 32, "hdd":100},
  ]
  }
- The response would be visible in the postman

### Running with Docker

- Clone this repo.
- Run `npm install` to install all dependencies.
- On the terminal from the root directory, run `docker build -t allocate_server:2 .` to build the docker image
- Run the container with `docker container run -p 8080:8080 allocate_server:2`
- Using Postman, send a request to `http://localhost:8080/server` with request body in this shape :
  {
  "virtualMachines": [
  {"cpu": 2, "ram": 32, "hdd":100},
  {"cpu": 1, "ram": 16, "hdd":10},
  {"cpu": 2, "ram": 32, "hdd":100},
  {"cpu": 3, "ram": 32, "hdd":100},
  ]
  }

## Testing

### testing locally

To test, run `npm run test` or `npm t` for short.
