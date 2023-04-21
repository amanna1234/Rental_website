import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Vehicles() {

    const [vehicleData, setVehicleData] = useState([]);
    const [addvehicle, setAddVehicle] = useState(false);
    const [newVehicleData, setNewVehicleData] = useState({
        vehicle_name: "",
        vehicle_number: "",
        vehicle_driven: "",
        vehicle_servicedone: "",
        vehicle_availability: true

    })

    const getvechicles = async () => {
        await axios.get("http://localh`ost:4000/vehicles/getVehicle").then((data) => {
            setVehicleData(data.data)

        }).catch((err) => console.log(err))

    }

    const addvechicle = async () => {
        await axios.post("http://localhost:4000/vehicles/addVehicle", newVehicleData).then((data) => {
            setAddVehicle(false)
            getvechicles()
        }).catch((err) => console.log(err))

    }

    const handleINputChange = (event) => {
        setNewVehicleData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value == "true" ? true : event.target.value == "false" ? false : event.target.value
        }));

    }


    useEffect(() => {
        getvechicles()
    }, [])
    return (
        <div className='container mt-5'>
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        vehicleData.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.vehicle_name}</td>
                                    <td>{item.vehicle_number}</td>
                                    <td>{item.vehicle_driven} kms</td>
                                    <td>{item.vehicle_servicedone} kms</td>
                                    <td>{item.vehicle_availability ? "Available" : "Not Available"}</td>
                                </tr>
                            )
                        })
                    }

                    {addvehicle && <tr>
                        <th scope="row"><button className='btn btn-danger py-0' onClick={addvechicle} >Add</button></th>
                        <td><input name='vehicle_name' value={newVehicleData.vehicle_name} onChange={handleINputChange}></input></td>
                        <td><input name='vehicle_number' value={newVehicleData.vehicle_number} onChange={handleINputChange}></input></td>
                        <td><input name='vehicle_driven' value={newVehicleData.vehicle_driven} onChange={handleINputChange}></input></td>
                        <td><input name='vehicle_servicedone' value={newVehicleData.vehicle_servicedone} onChange={handleINputChange} ></input></td>
                        <td>
                            <select name='vehicle_availability' value={newVehicleData.vehicle_availability} onChange={handleINputChange}>
                                <option value={true} >Available</option>
                                <option value={false} >Not Available</option>
                            </select>
                            <button style={{ border: "none", background: "none" }} onClick={() => setAddVehicle(!addvehicle)}>&#10006;</button>
                        </td>

                    </tr>
                    }

                </tbody>
            </table>
            {!addvehicle && <button onClick={() => setAddVehicle(!addvehicle)} className='btn btn-danger'>Add Vehicle</button>}
        </div>
    )
}
