import React from "react";
import BtnSign from "./BtnSign";
import { Switch, Route, Link } from "react-router-dom";

function NavBar() {
	return (
		<div className="nav-bar">
			<Link to="/" className="navbar-brand">
				<img
					className="navbar-brand"
					src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
					width="40"
					height="50"
				/>
			</Link>

			<Link to="/">
				<button className="btn btn-link  nav-bar'">Home</button>
			</Link>

			<Link to="/jam3ya" className="nav-item">
				<button className="btn btn-link">Jam3ya</button>
			</Link>

			<Link to="/AboutUs" className="nav-item">
				<button className="btn btn-link">About Us</button>
			</Link>
			<div className="btn-right">
				<BtnSign />
			</div>
		</div>
	);
}

export default NavBar;
