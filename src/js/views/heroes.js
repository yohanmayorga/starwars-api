import React, { useState, useEffect, useContext } from "react";
import "../../styles/heroes.css";
import hero from "../../img/hero.jpg";
import { Context } from "../store/appContext";
import { HeroDetail } from "./heroDetail.js";

export const Heroes = () => {

	const urlHeroes = "https://www.swapi.tech/api/people/"
	const { store, actions } = useContext(Context);
	const [heroCard, setHeroCard] = useState(false)
	const [number, setNumber] = useState("")
	const [heroName, setHeroName] = useState("")


	useEffect(() => {
		actions.getHeroes(urlHeroes);
	}, [])

	const prueba = (patron, id) => {
		actions.heroesFavorites(patron, id)
	}


	return (
		<>
			<HeroDetail
				open={heroCard}
				close={setHeroCard}
				name={heroName.name}
				data={number.uid} />

			<h2 id="heroesTitle">Heroes</h2>
			<div id="heroesLine"></div>
			<div id="heroesContainer">

				{store.heroesList.length == 0 && <span>Loading...</span>}
				{store.heroesList.length != 0 &&
					store.heroesList.map(item => (
						<div className="card" key={item.uid}>
							<img src={hero} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">You can click on the button below to learn more about the hero {item.name}</p>
								<div id="planetsButtons">
									<a className="btn btn-primary" onClick={() => { setHeroCard(true), setNumber(item), setHeroName(item) }}>Learn more!</a>
									<a className="btn btn-warning" onClick={() => { prueba(item.name, item.uid) }}>

										{store.favorites.map(object => object.id).includes(item.uid) ? <span className="heart">♥️</span> : "♡"}

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
