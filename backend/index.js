const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicles');
dotenv.config()

app.use(cors())
app.use(express.json())
app.use("/vehicles", vehicleRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/Rental").then(()=>console.log("mongodb connected")).catch((err)=>console.log(err))

app.listen(4000, ()=>console.log("node running"))