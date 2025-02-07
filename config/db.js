const mongoose = require('mongoose');

const dbConnection = async()=>{
    const connection = await mongoose.connect('mongodb+srv://arkaprabha31:HelpHiveIO@helphiveio.2ou7h.mongodb.net/');
}

module.exports = dbConnection;