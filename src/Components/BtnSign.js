import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import userData from "../Stores/User";

function BtnSign() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
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
		event.preventDefault();
		userData.signUp(data);
	};

	const handleSignIn = (event) => {
		event.preventDefault();
		userData.signIn(data);
	};

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				SignIn
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
					<Modal.Title>LOGIN</Modal.Title>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>
				<Modal.Body>
					<div className="form-group m-2">
						<label for="exampleInputEmail1">Username</label>
						<input
							onChange={handleChange}
							name="username"
							type="text"
							className="form-control "
							id="exampleInputEmail1"
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
				<Modal.Footer>
					<Button variant="secondary" onClick={handleSignUp}>
						Sign Up
					</Button>
					<Button
						type="submit"
						className="btn btn-primary"
						onClick={handleSignIn}
					>
						Sign In
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BtnSign;