import React, { useState, useEffect, useContext } from "react";
import "../../styles/planets.css";
import planet from "../../img/planet.jpg";
import { Context } from "../store/appContext";
import { PlanetDetail } from "./planetDetail.js";

export const Planets = () => {

	const urlPlanets = "https://www.swapi.tech/api/planets/"
	const { store, actions } = useContext(Context);
	const [planetCard, setPlanetCard] = useState(false)
	const [number, setNumber] = useState("")
	const [planetName, setPlanetName] = useState("")

	useEffect(() => {
		actions.getPlanets(urlPlanets);
	}, [])

	const prueba = (patron, id) => {
		actions.planetsFavorites(patron, id)
	}

	return (
		<>
			<PlanetDetail
				open={planetCard}
				close={setPlanetCard}
				name={planetName.name}
				data={number.uid} />

			<h2 id="planetsTitle">Planets</h2>
			<div id="planetsLine"></div>
			<div id="planetsContainer">

				{store.planetsList.length == 0 && <span>Loading...</span>}
				{store.planetsList.length != 0 &&
					store.planetsList.map(item => (
						<div className="card" key={item.uid}>
							<img src={planet} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">You can click on the button below to learn more about the planet {item.name}</p>
								<div id="planetsButtons">
									<a className="btn btn-primary" onClick={() => { setPlanetCard(true), setNumber(item), setPlanetName(item) }}>Learn more!</a>
									<a className="btn btn-warning" onClick={() => { prueba(item.name, item.uid) }}>
										{store.planets.map(object => object.id).includes(item.uid) ? <span className="heart">♥️</span> : "♡"}
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
