import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Moment from "react-moment";
import jam3yaStore from "../Stores/Jam3yaStore";
import userData from "../Stores/User";

function Jam3yaDetail(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	const startDateJam3ya = new Date(props.jam3ya.startDate);
	const endDateJam3ya = new Date(props.jam3ya.endDate);

	const jam3yaUsers = props.jam3ya.users
		.map((user) => user.username)
		.join(" - ");

	const numberOfUsers = props.jam3ya.users.length + 1;

	const [joined, setJoined] = useState("Join");
	const [joinedStatus, setjoinedStatus] = useState(false);
	const [color, setColor] = useState("primary");

	const changeJoin = () => {
		if (jam3yaStore.joined === false) {
			setjoinedStatus(false);
		} else {
			setjoinedStatus(true);
		}
	};

	// delete
	const handleDelete = (event) => {
		event.preventDefault();
		jam3yaStore.deleteJam3ya(props.jam3ya._id);
	};

	// leave
	const handleLeave = (event) => {
		event.preventDefault();
		jam3yaStore.leaveJam3ya(props.jam3ya._id);
		// handleClose();
	};

	return (
		<div>
			<Button
				className="detail-btn"
				variant="outline-primary"
				onClick={(e) => {
					setShow(true);
				}}
			>
				Details
			</Button>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="jam3ya-detail-container"
			>
				<Modal.Header>
					<img
						className="detail-image"
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
					<Modal.Title> Details</Modal.Title>

					<Button variant="outline-danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>

				<Modal.Body>
					<center>
						<div className="container">
							<img className="image-fit" src={props.jam3ya.image} />
						</div>
					</center>
					<br />
					<Modal.Title>
						Title:
						<h6> {props.jam3ya.title}</h6>
					</Modal.Title>
					<br />

					<div>
						<h6>Monthly Payment:</h6>
						<p>{props.jam3ya.amount} KD</p>
					</div>

					<div>
						<h6>Limit User's:</h6>
						<p>{props.jam3ya.limit}</p>
					</div>

					<div className="detail-date">
						<h6>Start Date: :</h6>
						<p>
							<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
						</p>

						<h6> End Date:</h6>
						<p>
							<Moment format="YYYY/MM/DD" date={endDateJam3ya} />
						</p>
					</div>
				</Modal.Body>

				<center>
					<div>
						<h5>
							{/* <strong>Users: </strong> */}
							{`Number of Users: ${numberOfUsers}`}
						</h5>
					</div>
					<div className="footer-users">
						<p>{jam3yaUsers} </p>
					</div>
				</center>
				<div className="delete-leave-container">
					<Modal.Footer className="footer-buttons">
						<Button
							className="join-btn"
							active
							variant={color}
							onClick={() => {
								jam3yaStore.joinJam3ya(props.jam3ya._id);
								changeJoin();
								// handleClose();
							}}
						>
							{joined}
						</Button>
						<br />

						<Button onClick={handleDelete} type="submit" variant="danger">
							Delete
						</Button>
						<Button onClick={handleLeave} type="submit" variant="warning">
							Leave
						</Button>
					</Modal.Footer>
				</div>
				<Modal.Footer>
					<div>
						<p>
							<strong>Author: </strong>
							{props.jam3ya.author.username}
						</p>
					</div>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default observer(Jam3yaDetail);
