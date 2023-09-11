import React, { useState, useEffect, useContext } from "react";
import "../../styles/navbar.css";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { Favorites } from "../views/favorites";


export const Navbar = () => {

    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState(false)

    return (
        <div className="navbarContainer">
            <Favorites
                open={favorites}
                close={setFavorites}
            />
            <img src={logo} className="logoImage" alt="logo" />
            <button type="button" class="btn btn-success" onClick={() => { setFavorites(true) }}>Favorites {store.favorites.length + store.planets.length}</button>
        </div>
    );
};