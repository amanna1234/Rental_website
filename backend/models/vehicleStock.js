const mongoose = require('mongoose');


const vehicleInStockSchema = new mongoose.Schema({
     vehicle_name : {
        type: String,
        required: true
     },
     vehicle_number : {
       type: String,
       required: true,
       unique: true
     },
     vehicle_driven : {
        type: Number,
        reuired : true
     },
     vehicle_servicedone : {
        type: Number,
        required : true
     },
     vehicle_availability : {
        type : Boolean,
        reuired : true
     }
})

const vehicleInStockMOdel  = mongoose.model("VehicleInStock", vehicleInStockSchema);

module.exports = vehicleInStockMOdel