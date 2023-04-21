const express = require('express');
const router = express.Router();
const vehicleStockMOdel = require('../models/vehicleStock');


router.post('/addVehicle', async (req, res) => {
    const {vehicle_name, vehicle_number, vehicle_driven, vehicle_servicedone, vehicle_availability} = req.body;

    const newVehicle = {
        vehicle_name : vehicle_name,
        vehicle_number : vehicle_number,
        vehicle_driven : vehicle_driven,
        vehicle_servicedone : vehicle_servicedone,
        vehicle_availability : vehicle_availability
    }

    await vehicleStockMOdel.create(newVehicle).then(()=> res.status(200).send("vehicle added successfully")).catch((error)=> res.status(400).send(error))

    
})

router.get('/getVehicle', async (req, res) => {
  

   const allVehicle =  await vehicleStockMOdel.find()

   if(allVehicle){
    res.status(200).send(allVehicle)
   }else{
    res.status(400).send("data not found")
   }

    
})

module.exports = router


