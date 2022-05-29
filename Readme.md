## The node.js Toll Managment System

This app is used for calculating tolls 

## Requirements

* Node 16
* Mongodb

## Common setup

Clone the repo and install the dependencies.

unzip Repository

```bash
npm install
```

## Steps for read-only access

To start the express server, run the following

```bash
npm run start
```

Open [http://localhost:9000](http://localhost:9000) and take a look around.


## endPoint

Below endpoint is used for entry of vehicles
http://localhost:9000/entry

Below endpoint is used for calculating tolls when vehicles exits
http://localhost:9000/exit