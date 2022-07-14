const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

const bootstrapDB = async () => {
    return await mongoose.connect(DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true}, err => {
        if (err){
            console.error('Connection to DB failed');
        } else{
            console.log('Connection to DB was successful');
        }
    })
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection failed'));

module.exports = bootstrapDB