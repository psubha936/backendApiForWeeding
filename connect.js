const mongoose = require('mongoose');

const connectDb = (uri)=>{
    console.log('Connecting to database');
    return mongoose.connect(uri , {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
}

module.exports = connectDb;