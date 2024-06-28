const express = require('express')
const router = express.Router()
const TicketModel = require('../model/schema.js')

router.post("/booking", async(req,res)=>{
    const {movie, slot, seats} = req.body
    try {
        const myData = new TicketModel({movie, slot,seats})
        await myData.save()

        res.status(200).json({data:myData, message: "Bokking Successfull"})
    } catch (err) {
        res.status(500).json({data: null, message: "something went wrong"})
    }
})

router.get("/booking", async(req,res)=>{
    try {
     const myData = await   TicketModel.find().sort({_id:-1}).limit(1)
     if(myData.length === 0){
        res.status(200).json({data: null, message: "No privoius booking found"})
     }else{
        res.status(200).json({data: myData[0]})
     }
    } catch (error) {
        res.status(500).json({data: null, message: "something went wrong"})
    }
})



module.exports = router