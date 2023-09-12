import React, { useState, useEffect, useContext } from "react";
import "../../styles/cars.css";
import car from "../../img/car.jpg";
import { Context } from "../store/appContext";
import { CarDetail } from "./carDetail.js";

export const Cars = () => {

    const urlCars = "https://www.swapi.tech/api/vehicles/"
    const { store, actions } = useContext(Context);
    const [carCard, setCarCard] = useState(false)
    const [number, setNumber] = useState("")
    const [carName, setCarName] = useState("")


    useEffect(() => {
        actions.getCars(urlCars);
    }, [])

    const prueba = (patron, id) => {
        actions.carsFavorites(patron, id)
    }


    return (
        <>
            <CarDetail
                open={carCard}
                close={setCarCard}
                name={carName.name}
                data={number.uid} />

            <h2 id="carsTitle">Cars</h2>
            <div id="carsLine"></div>
            <div id="heroesContainer">

                {store.carsList.length == 0 && <span>Loading...</span>}
                {store.carsList.length != 0 &&
                    store.carsList.map(item => (
                        <div className="card" key={item.uid}>
                            <img src={car} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">You can click on the button below to learn more about the hero {item.name}</p>
                                <div id="planetsButtons">
                                    <a className="btn btn-primary" onClick={() => { setCarCard(true), setNumber(item), setCarName(item) }}>Learn more!</a>
                                    <a className="btn btn-warning" onClick={() => { prueba(item.name, item.uid) }}>

                                        {store.carsFavorites.map(object => object.id).includes(item.uid) ? <span className="heart">♥️</span> : "♡"}

                                    </a>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </>

    )

};
