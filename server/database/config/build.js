const fs = require('fs');

const dbConnection = require('./connection');

const sql = fs.readFileSync(`${__dirname}/build.sql`).toString();

dbConnection.query(sql, (err, res) => {
  if (err) console.log(err);
  console.log('database is built successfully');
});
