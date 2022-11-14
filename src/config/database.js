import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/ynov-api")
    .then(() => console.log("Connected to database"))
    .catch((e) => console.log(`Error connecting to database : ${e}`))