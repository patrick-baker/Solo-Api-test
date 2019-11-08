const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log(req.body.url);
  
  const queryText = `INSERT INTO favorites ("url", "category-id") VALUES ($1, $2)`
  pool.query(queryText, [req.body.url, 1])
    .then( (result) => {
      res.sendStatus(200);
    })
    .catch( (error) => {
      res.sendStatus(501);
    })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
