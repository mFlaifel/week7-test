
const { Pool } = require('pg');
require('env2')('./config.env');

let DB_URL;


if (process.env.NODE_ENV === 'production') {
  DB_URL = process.env.PRO_DB;
} else if (process.env.NODE_ENV === 'development') {
  DB_URL = process.env.DEV_DB;
} else {
  throw new Error('No Database URL!!!');
}
const option = {
  connectionString: DB_URL,
  ssl: true,
};

module.exports = new Pool(option);
