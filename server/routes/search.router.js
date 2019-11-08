const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:search', (req, res) => {
    console.log(req.params);
    // query giphy API
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.params.search,
            limit: 10,
        }
    }).then( (result) => {
        res.send(result.data);
        console.log(result.data);
    })
    .catch(error => {
        console.log('error in api GETTER', error);
    })
});

module.exports = router;
