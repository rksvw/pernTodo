const Pool = require("pg").Pool;

// Retrive the values of the database properties
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbUsername = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbName = process.env.DB_NAME

const pool = new Pool({
    user: dbUsername,
    password: dbPassword,
    host: dbHost,
    port: dbPort,
    database: dbName
});

module.exports = pool;