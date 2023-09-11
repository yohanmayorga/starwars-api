import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/favorites.css";

export const Favorites = ({ open, close }) => {

    if (!open) return null;
    const { store, actions } = useContext(Context)

    const prueba = (patron, id) => {
        actions.heroesFavorites(patron, id)
        console.log(patron)
    }

    const prueba2 = (patron, id) => {
        actions.planetsFavorites(patron, id)
        console.log(patron)
    }

    return (
        <>

            <div className="favoritesBackground"></div>


            {store.favorites.length + store.planets.length == 0 &&
                <div className="warningFavorites">
                    <h1 className="favoritesTitle">There are no favorites</h1>
                    <button type="button" class="btn btn-success" onClick={() => { close(false) }}>Close</button>
                </div>
            }

            <div className="mainFavorites" style={{ display: store.favorites.length != 0 || store.planets.length != 0 ? "flex" : "none" }}>
                <h1 className="favoritesTitle">Favorites: {store.favorites.length + store.planets.length}</h1>
                <div className="mainFavorites2">
                    {store.favorites.length != 0 &&
                        <div className="favoritesHeroes">
                            <h5 className="favoritesTitle">Heroes</h5>
                            <ul>
                                {store.favorites.map((element) => <li key={(element.id)} className="element">{element.name}<p className="trashCan" onClick={() => { prueba(element.name, element.id) }}>🗑️</p></li>)}
                            </ul>
                        </div>}
                    {store.planets.length != 0 &&
                        <div className="favoritesHeroes">
                            <h5 className="favoritesTitle">Planets</h5>
                            <ul>
                                {store.planets.map((element) => <li key={(element.id)} className="element">{element.name}<p className="trashCan" onClick={() => { prueba2(element.name, element.id) }}>🗑️</p></li>)}
                            </ul>
                        </div>}
                </div>
                <div className="mainFavorites3">
                    <button type="button" class="btn btn-success" id="testeo" onClick={() => { close(false) }}>Close</button>
                </div>
            </div>





        </>
    )
}