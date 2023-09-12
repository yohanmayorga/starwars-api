const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planetsList: [],
			planetDetail: [],
			planets: [],

			heroesList: [],
			heroDetail: [],
			favorites: [],

			carsList: [],
			carDetail: [],
			carsFavorites: [],
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

			getCars: (urlCars) => {
				const store = getStore()
				fetch(urlCars)
					.then(res => res.json())
					.then(data => { setStore({ ...store, carsList: [...store.carsList, ...data.results] }) })
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

			getCarDetail: (urlCarDetail, idc) => {
				const store = getStore()
				fetch(urlCarDetail)
					.then(res => res.json())
					.then(data => {
						const car = {
							id: idc,
							...data.result.properties
						}
						setStore({ ...store, carDetail: [...store.carDetail, car] })
					})
					.catch(err => console.error(err))
				return true
			},

			deleteDetails: () => {
				const store = getStore()
				setStore({ ...store, planetDetail: [] })
				setStore({ ...store, heroDetail: [] })
				setStore({ ...store, carDetail: [] })
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
			},

			carsFavorites: (patron, id) => {
				const store = getStore()
				const cars = store.carsFavorites
				const existingCar = cars.find(car => car.id === id)
				if (existingCar) {
					cars.splice(cars.indexOf(existingCar), 1)
				} else {
					cars.unshift({ id, name: patron })
				}
				setStore({ ...store, cars })
			}
		}
	};
};

export default getState;
