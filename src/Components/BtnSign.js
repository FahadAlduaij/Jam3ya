import React from "react";
import { Modal, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import userData from "../Stores/User";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

function BtnSign() {
	const [sigingUp, setsigingUp] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
		setsigingUp(false);
	};
	const handleShow = () => setShow(true);

	const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSignUp = (event) => {
		try {
			event.preventDefault();
			userData.signUp(data);
			handleClose();
		} catch (error) {
			window.alert(error);
		}
	};

	const openSignUp = (event) => {
		try {
			event.preventDefault();
			setsigingUp(true);
		} catch (error) {
			window.alert(error);
		}
	};

	const handleSignIn = (event) => {
		try {
			event.preventDefault();
			userData.signIn(data);
			handleClose();
		} catch (error) {
			window.alert(error);
		}
	};

	const handleLogout = () => {
		try {
			userData.logOut();
		} catch (error) {
			window.alert(error);
		}
	};

	return (
		<>
			{userData.user ? (
				<div className="welcome-text">
					<Button variant="danger" as="button" onClick={handleLogout}>
						Sign Out
					</Button>
				</div>
			) : (
				<div className=" welcome-text">
					<Button variant="success" as="button" onClick={handleShow}>
						Sign In
					</Button>

					<Button variant="secondary" as="button" onClick={handleShow}>
						Sign Up
					</Button>
				</div>
			)}

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
					{sigingUp === false ? (
						<Modal.Title>LOGIN</Modal.Title>
					) : (
						<Modal.Title>SIGNUP</Modal.Title>
					)}

					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>

				{sigingUp === false ? (
					<Modal.Body>
						<div className="form-group m-2">
							<label>Username</label>
							<input
								onChange={handleChange}
								name="username"
								type="text"
								className="form-control"
								placeholder="Enter Your Username"
							/>
						</div>
						<div className="form-group m-2">
							<label for="exampleInputPassword1">Password</label>
							<input
								onChange={handleChange}
								name="password"
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
					</Modal.Body>
				) : (
					<Modal.Body>
						<div className="form-group m-2">
							<label>Username</label>
							<input
								onChange={handleChange}
								name="username"
								type="text"
								className="form-control"
								placeholder="Enter Your Username"
							/>
						</div>
						<div className="form-group m-2">
							<label for="exampleInputEmail1">Email address</label>
							<input
								onChange={handleChange}
								name="email"
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter Your email"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group m-2">
							<label for="exampleInputPassword1">Password</label>
							<input
								onChange={handleChange}
								name="password"
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
					</Modal.Body>
				)}

				{sigingUp === false ? (
					<Modal.Footer onSubmit={handleSignIn}>
						<Button variant="secondary" onClick={openSignUp}>
							Create New Account
						</Button>
						<Button type="submit" variant="success" onClick={handleSignIn}>
							Log In
						</Button>
					</Modal.Footer>
				) : (
					<Modal.Footer>
						<Button variant="secondary" onClick={handleSignUp}>
							Sign Up
						</Button>
					</Modal.Footer>
				)}
			</Modal>
		</>
	);
}

export default observer(BtnSign);
