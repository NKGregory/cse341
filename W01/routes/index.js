const routes = require('express').Router();

routes.get('/',(req, res) => {
    res.send('Whitney Gregory');
})

module.exports = routes;