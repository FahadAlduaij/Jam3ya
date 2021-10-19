import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Moment from "react-moment";

function Jam3yaDetail(props) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);

	const startDateJam3ya = new Date(props.jam3ya.startDate);
	const endDateJam3ya = new Date(props.jam3ya.endDate);

	const jam3yaUsers = props.jam3ya.users.map((user) => user.username);

	// const authors = props.jam3ya.author.find((jam3ya) => jam3ya.id === jam3ya.author);
	// console.log(authors)

	return (
		<>
			<Button variant="dark" onClick={() => setShow(true)}>
				Details
			</Button>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header>
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
					<Modal.Title id="example-custom-modal-styling-title">
						Jam3ya Details
					</Modal.Title>

					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>


				<Modal.Body>
					<center>
						<div>
							<p>
								<strong>Admin: </strong>
								{props.jam3ya.author.username}
							</p>
						</div>
					</center>

				</Modal.Body>
				<Modal.Body>
                    <center>
					<div className="container">
						<img className="image-fit" src={props.jam3ya.image} />
					</div>
					<h5>
						<strong>Title: </strong>
						{props.jam3ya.title}
					</h5>
					<br />
                         </center>
					<p>
						<strong>Monthly Payment: </strong>
						{props.jam3ya.amount} KD
					</p>
					
					<p>
						<strong>Limit User's: </strong>
						{props.jam3ya.limit} 
					</p>
					<p>
						<strong>Start Date: </strong>
						<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					</p>
					<p>
						<strong>End Date: </strong>
						<Moment format="YYYY/MM/DD" date={endDateJam3ya} />
					</p>
				</Modal.Body>

				<Modal.Footer className='footer-users'>
					<center>
						<div>
							<h5>
								<strong>Users: </strong>
							</h5>
						</div>
					</center>
				</Modal.Footer>

				<Modal.Footer className='footer-users'>
					<div>
						<p>{jam3yaUsers},</p>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default observer(Jam3yaDetail);
