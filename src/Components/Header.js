import React from "react";
import BtnSign from "./BtnSign";

function Header() {
	return (
		<div className="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
				<a className="navbar-brand" href="#">
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
				</a>

				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only"></span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
				</ul>

				<BtnSign />
			</nav>
		</div>
	);
}

export default Header;
