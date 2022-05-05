const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connect = require ('./db/connect');

connect.initDatatbase();

app.use(bodyParser.json());
app.use('/', require('./routes'));
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
// })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});