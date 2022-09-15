const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "studentbio",
  password: "prince",
  port: 5432,
});
module.exports = pool;
