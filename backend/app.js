const express = require('express')
const cors = require('cors')
const app = express()
const TicketModel = require('./model/schema.js')


app.use(cors());



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require('./router/router.js'))


app.get("/",(req,res)=>{
    res.send("hey welcome to server")
})





module.exports = app