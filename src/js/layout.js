import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Planets } from "./views/planets";
import { Heroes } from "./views/heroes";
import { Cars } from "./views/cars";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<div className="titleText ">
					<h5>Star Wars Blog Reading List</h5>
					<p>By Yohan Mayorga for 4Geeks Academy</p>
				</div>
				<div className="mainContentBackground">
					<Heroes />
					<Planets />
					<Cars />
				</div>
				<Routes>
					<Route path="/demo" element={<Demo />} />
					<Route path="/single/:theid" element={<Single />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
