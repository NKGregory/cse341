const express = require ('express');
const connectDB = require('./db/connect');
const app = express();

connectDB();
const port = process.env.PORT || 3000;

// app.use('/',require('./routes/index'))

app.listen(port, () => {
    console.log (`Running on port ${port}`)
})