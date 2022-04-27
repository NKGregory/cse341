const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ydruv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const connectDB = async()=>{
    await client.connect();
    console.log('db connected..!');
};
module.exports = connectDB;