
const Connection = require('../config/connection');

const addCity = (data) => {
  const {
    name, city,
  } = data;
  const sql = {
    text: 'INSERT INTO cities (name,city) VALUES ($1, $2);',
    values: [name, city],
  };
  return Connection.query(sql);
};

module.exports = {
  addCity,
};
