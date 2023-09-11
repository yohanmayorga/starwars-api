const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetsList: [],
			planetDetail: [],
			heroesList: [],
			heroDetail: [],
			favorites: [],
			planets: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPlanets: (urlPlanets) => {
				const store = getStore()
				fetch(urlPlanets)
					.then(res => res.json())
					.then(data => { setStore({ ...store, planetsList: [...store.planetsList, ...data.results] }) })
					.catch(err => console.error(err))
				return true
			},

			getHeroes: (urlHeroes) => {
				const store = getStore()
				fetch(urlHeroes)
					.then(res => res.json())
					.then(data => { setStore({ ...store, heroesList: [...store.heroesList, ...data.results] }) })
					.catch(err => console.error(err))
				return true
			},

			getPlanetDetail: (urlPlanetDetail, idc) => {
				const store = getStore()
				fetch(urlPlanetDetail)
					.then(res => res.json())
					.then(data => {
						const planet = {
							id: idc,
							...data.result.properties
						}
						setStore({ ...store, planetDetail: [...store.planetDetail, planet] })
					})
					.catch(err => console.error(err))
				return true
			},

			getHeroDetail: (urlHeroDetail, idc) => {
				const store = getStore()
				fetch(urlHeroDetail)
					.then(res => res.json())
					.then(data => {
						const hero = {
							id: idc,
							...data.result.properties
						}
						setStore({ ...store, heroDetail: [...store.heroDetail, hero] })
					})
					.catch(err => console.error(err))
				return true
			},

			deleteDetails: () => {
				const store = getStore()
				setStore({ ...store, planetDetail: [] })
				setStore({ ...store, heroDetail: [] })
			},

			heroesFavorites: (patron, id) => {
				const store = getStore()
				const favorites = store.favorites
				const existingHero = favorites.find(hero => hero.id === id)
				if (existingHero) {
					favorites.splice(favorites.indexOf(existingHero), 1)
				} else {
					favorites.unshift({ id, name: patron })
				}
				setStore({ ...store, favorites })
			},

			planetsFavorites: (patron, id) => {
				const store = getStore()
				const planets = store.planets
				const existingPlanet = planets.find(hero => hero.id === id)
				if (existingPlanet) {
					planets.splice(planets.indexOf(existingPlanet), 1)
				} else {
					planets.unshift({ id, name: patron })
				}
				setStore({ ...store, planets })
			}
		}
	};
};

export default getState;
