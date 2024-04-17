const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "shadowgarden1256956ritik09p",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;