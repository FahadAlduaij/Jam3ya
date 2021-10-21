import React from "react";
import BtnSign from "./BtnSign";
import { Switch, Route, Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-1 ">
			<div className="d-flex flex-row  align-items-center ">
				<Link to="/" className="navbar-brand">
					<img
						className="navbar-brand"
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="60"
					/>
				</Link>

				<Link to="/" className="nav-item">
					<button className="btn btn-link p-4">Home</button>
				</Link>

				<Link to="/jam3ya" className="nav-item">
					<button className="btn btn-link p-4">Jam3ya</button>
				</Link>
				<div className="">
					<BtnSign />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
