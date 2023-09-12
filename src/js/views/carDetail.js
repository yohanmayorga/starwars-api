import React, { useState, useEffect, useContext } from "react";
import "../../styles/carDetail.css";
import car from "../../img/car.jpg";
import { Context } from "../store/appContext";

let idc = 1

export const CarDetail = ({ open, close, data, name }) => {
    if (!open) return null;
    idc = idc + 1

    const urlCarDetail = "https://www.swapi.tech/api/vehicles/" + data
    const { store, actions } = useContext(Context);

    if (open) {
        useEffect(() => {
            actions.getCarDetail(urlCarDetail, idc);
        }, [])
    }

    const handleDelete = () => {
        actions.deleteDetails()
    }

    return (
        <div style={{ position: "absolute" }}>
            <div className="carDetailBackground"></div>
            <div className="carDetailContainer">
                <div className="mainCarDetail">
                    <img src={car} className="carPicture" alt="Car Picture" />
                    <div className="carDetailFullText">
                        <h1 id="aqui">{name}</h1>
                        <p className="carDetailText">You can learn more about the car {name} in the information below. <br /> <br />Remember that you can use the bar to scroll through information.</p>
                    </div>

                </div>
                {store.carDetail.map(item => (
                    <div className="carInfoCard" key={idc}>
                        <div className="carInfo">
                            <h5>Name:</h5>
                            <p className="card-title">{item.name}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Capacity:</h5>
                            <p className="card-title">{item.cargo_capacity}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Consumables:</h5>
                            <p className="card-title">{item.consumables}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Costs:</h5>
                            <p className="card-title">{item.cost_in_credits}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Crew:</h5>
                            <p className="card-title">{item.crew}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Length:</h5>
                            <p className="card-title">{item.length}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Manufacturer:</h5>
                            <p className="card-title">{item.manufacturer}</p>
                        </div>
                        <div className="carInfo">
                            <h5>Model:</h5>
                            <p className="card-title">{item.model}</p>
                        </div>
                    </div>
                ))
                }
                <button type="button" className="btn btn-primary mb-2" id="saveButton" onClick={() => { close(false), handleDelete() }}>Close card</button>
            </div>
        </div>
    )
};
