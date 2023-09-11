import React, { useState, useEffect, useContext } from "react";
import "../../styles/heroDetail.css";
import hero from "../../img/hero.jpg";
import { Context } from "../store/appContext";

let idc = 1

export const HeroDetail = ({ open, close, data, name }) => {
    if (!open) return null;
    idc = idc + 1

    const urlHeroDetail = "https://www.swapi.tech/api/people/" + data
    const { store, actions } = useContext(Context);

    if (open) {
        useEffect(() => {
            actions.getHeroDetail(urlHeroDetail, idc);
        }, [])
    }

    const handleDelete = () => {
        actions.deleteDetails()
    }

    return (
        <div style={{ position: "absolute" }}>
            <div className="heroDetailBackground"></div>
            <div className="heroDetailContainer">
                <div className="mainHeroDetail">
                    <img src={hero} className="heroPicture" alt="Hero Picture" />
                    <div className="heroDetailFullText">
                        <h1 id="aqui">{name}</h1>
                        <p className="heroDetailText">You can learn more about {name} in the information below. <br /> <br />Remember that you can use the bar to scroll through information.</p>
                    </div>

                </div>
                {store.heroDetail.map(item => (
                    <div className="heroInfoCard" key={idc}>
                        <div className="heroInfo">
                            <h5>Height:</h5>
                            <p className="card-title">{item.height}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Mass:</h5>
                            <p className="card-title">{item.mass}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Hair color:</h5>
                            <p className="card-title">{item.hair_color}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Skin color:</h5>
                            <p className="card-title">{item.skin_color}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Eye color:</h5>
                            <p className="card-title">{item.eye_color}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Birthday year:</h5>
                            <p className="card-title">{item.birth_year}</p>
                        </div>
                        <div className="heroInfo">
                            <h5>Gender:</h5>
                            <p className="card-title">{item.gender}</p>
                        </div>
                    </div>
                ))
                }
                <button type="button" className="btn btn-primary mb-2" id="saveButton" onClick={() => { close(false), handleDelete() }}>Close card</button>
            </div>
        </div>
    )
};
