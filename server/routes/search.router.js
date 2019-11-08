const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');

const router = express.Router();

router.get('/:search', (req, res) => {
    // query giphy API
    axios({
        method: 'GET',
        url: 'http:/api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: req.params.search,
            limit: 10,
        }
    }).then( (result) => {
        res.send(result.data);
    })
});

module.exports = router;
