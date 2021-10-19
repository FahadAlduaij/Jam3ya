import React from "react";
import BtnSign from "./BtnSign";
import { Switch, Route, Link } from "react-router-dom";


function Header() {
	return (
		<div className="header my-font">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
				<ul className="navbar-nav">
					<Link to="/" className="navbar-brand">
						<img
							src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
							width="50"
							height="50"
							alt=""
						/>
					</Link>
					{/* <div className="coin" id="coin"></div> */}

					<Link to="/" className="navbar-brand">
						<li className="nav-item active">
							<a className="nav-link">
								Home <span className="sr-only"></span>
							</a>
						</li>
					</Link>
					<Link to="/jam3ya" className="navbar-brand">
						<li className="nav-item active">
							<a className="nav-link">
								Jam3ya <span className="sr-only"></span>
							</a>
						</li>
					</Link>
					<Link to="/jam3ya" clLinkssName="nav-link"></Link>
				</ul>
				<div className="signin">
					<BtnSign />
				</div>
			</nav>
		</div>
	);
}

export default Header;
