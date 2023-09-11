import React, { useState, useEffect, useContext } from "react";
import "../../styles/planetDetail.css";
import planet from "../../img/planet.jpg";
import { Context } from "../store/appContext";

let idc = 1

export const PlanetDetail = ({ open, close, data, name }) => {
    if (!open) return null;
    idc = idc + 1

    const urlPlanetDetail = "https://www.swapi.tech/api/planets/" + data
    const { store, actions } = useContext(Context);

    if (open) {
        useEffect(() => {
            actions.getPlanetDetail(urlPlanetDetail, idc);
        }, [])
    }

    const handleDelete = () => {
        actions.deleteDetails()
    }

    return (
        <div style={{ position: "absolute" }}>
            <div className="planetDetailBackground"></div>
            <div className="planetDetailContainer">
                <div className="mainPlanetDetail">
                    <img src={planet} className="planetPicture" alt="Planet Picture" />
                    <div className="planetDetailFullText">
                        <h1 id="aqui">{name}</h1>
                        <p className="planetDetailText">You can learn more about the planet {name} in the information below. <br /> <br />Remember that you can use the bar to scroll through information.</p>
                    </div>

                </div>
                {store.planetDetail.map(item => (
                    <div className="planetInfoCard" key={idc}>
                        <div className="planetInfo">
                            <h5>Diameter:</h5>
                            <p className="card-title">{item.diameter}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Rotation:</h5>
                            <p className="card-title">{item.rotation_period}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Orbital period:</h5>
                            <p className="card-title">{item.orbital_period}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Gravity:</h5>
                            <p className="card-title">{item.gravity}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Population:</h5>
                            <p className="card-title">{item.population}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Climate:</h5>
                            <p className="card-title">{item.climate}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Terrain:</h5>
                            <p className="card-title">{item.terrain}</p>
                        </div>
                        <div className="planetInfo">
                            <h5>Surface water:</h5>
                            <p className="card-title">{item.surface_water}</p>
                        </div>
                    </div>
                ))
                }
                <button type="button" className="btn btn-primary mb-2" id="saveButton" onClick={() => { close(false), handleDelete() }}>Close card</button>
            </div>
        </div>
    )
};
