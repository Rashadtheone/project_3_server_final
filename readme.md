# Express API Boilerplate

An Express seed application configured to serve GET, POST, PUT and DELETE with Mongoose configuration for a connection to a local MongoDB.

This should get you up and running in no time!

Prerequisites:

* MongoDB
* Node 8.*

## Stack Specs

Name         | Version
------------ | -------
node         | 8.9.1
express      | 4.16.2
body-parser  | 1.18.2
mongoose     | 4.13.7
cors         | 2.8.4

## Installation

* Clone the repo
* cd into spawned directory
* `npm install`
* Open a new tab in your terminal and start your Mongo DB with `mongod`
* Back in the project, seed your database to confirm mongoose connection with `node db/config/db-seed.js`
* Confirm with a terminal output of 'Your db has been seeded!'
* Start the project with `node index.js` or `nodemon` (if installed)
* Open a browser and navigate to: localhost:8080/api/v1/players
* You should see a players payload!
