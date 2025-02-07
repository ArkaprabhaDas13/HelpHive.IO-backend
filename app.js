const express = require('express');
const dbConnection = require('./config/db')


const app = express();

dbConnection().then(()=>{
    console.log("Connected to DB!");
    app.listen(4000 , ()=>{
        console.log("Server is running on port 3000")
    })
})
.catch((err)=>{
    console.log("Error connecting to DB! : ", err);
})


