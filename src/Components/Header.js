import React from "react";

function Header() {
	return (
		<div className="header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
				<a class="navbar-brand" href="#">
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
				</a>

				<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">
							Home <span class="sr-only"></span>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Features
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							Pricing
						</a>
					</li>
				</ul>
				<button className="btn btn-primary nav-item">SignIn/SignUp</button>
			</nav>
		</div>
	);
}

export default Header;
