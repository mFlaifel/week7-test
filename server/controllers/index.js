const express = require('express');
const { addCity } = require('../database/queries/addCity');
const { getCities } = require('../database/queries/getCities');

const router = express.Router();

router.get('/cities', (req, res) => {
  getCities()
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => console.log('err:', err));
});
router.post('/add-city', (req, res) => {
  const data = req.body;
  addCity(data)
    .then(() => res.redirect('/'))
    .catch((err) => console.log('err:', err));
});


module.exports = router;
