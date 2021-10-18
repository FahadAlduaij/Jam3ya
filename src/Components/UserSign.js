import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

function UserSign() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const [data, setData] = useState({
        
    })

    const handleChange = (event) => {
        
    }

	return (
		<div>
			<>
				<Button variant="primary" onClick={handleShow}>
					SignIn
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header>
						<Modal.Title>SignIn/SignUp</Modal.Title>
						<Button variant="secondary" type="submit">
							Sign Up
						</Button>
					</Modal.Header>
					<Modal.Body>
						<form>
							<div className="form-group m-2">
								<label for="exampleInputEmail1">Username</label>
								<input
									type="text"
									className="form-control "
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter Your Username"
								/>
							</div>
							<div className="form-group m-2">
								<label for="exampleInputEmail1">Email address</label>
								<input
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
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
								/>
							</div>
							<div className="form-check"></div>
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Close
						</Button>
						<Button type="submit" className="btn btn-primary">
							Sign In
						</Button>
					</Modal.Footer>
				</Modal>
			</>
			);
		</div>
	);
}

export default UserSign;
