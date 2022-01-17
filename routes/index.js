const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/', (req, res) => {
    res.render('search')
});

router.get('/results', (req, res) => {

    let query = req.query.search

    request('https://api.themoviedb.org/3/search/movie?api_key=4b462fafc3ea9dcc78230cdc925e2ed6&query='+query, (error, response, body) => {
        if (error) {
            console.log(error);
        }

        let data = JSON.parse(body)
        res.render('movies', {data:data, searchQuery:query});

    });

});

module.exports = router;