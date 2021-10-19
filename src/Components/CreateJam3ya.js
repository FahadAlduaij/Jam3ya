import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import jam3yaStore from "../Stores/Jam3yaStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateJam3ya() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [data, setData] = useState({
		title: "",
		image: "",
		amount: 0,
		limit: 0,
		startDate: Date.now(),
		endDate: Date.now(),
	});

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleCreate = (event) => {
		event.preventDefault();
		jam3yaStore.createJam3ya(data);
	};

	return (
		<>
			<Button className='btn-create-jam3ya' variant="light" size="lg" onClick={handleShow}>
				Create New Jam3ya
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<img
						src="https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
						width="50"
						height="50"
						alt=""
					/>
					<Modal.Title>Create New Jam3ya</Modal.Title>
					<Button variant="outline-danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>
				<Modal.Body>
					<div className="form-group m-2">
						<label for="titleInput">Title</label>
						<input
							onChange={handleChange}
							name="title"
							id="titleInput"
							type="text"
							className="form-control"
							placeholder="Enter The Title"
						/>
					</div>

					<div className="form-group m-2">
						<label for="imageInput">Image</label>
						<input
							onChange={handleChange}
							name="image"
							id="imageInput"
							type="text"
							className="form-control"
							placeholder="Enter Image URL"
						/>
					</div>

					<div className="form-group m-2">
						<label for="amountInput">Amount</label>
						<input
							onChange={handleChange}
							name="amount"
							type="number"
							className="form-control"
							id="amountInput"
							placeholder="Enter Amount"
						/>
					</div>
					<div className="form-group m-2">
						<label for="limitInput">Limit</label>
						<input
							onChange={handleChange}
							name="limit"
							id="limitInput"
							type="number"
							className="form-control"
							placeholder="Enter Limit"
						/>
					</div>

					<div className="form-group m-2">
						<label for="startDateInput">StartDate </label>
						<DatePicker
							name="startDate"
							id="startDateInput"
							selected={data.startDate}
							onChange={(date) => setData({ ...data, startDate: date })}
						/>
					</div>

					<div className="form-group m-2">
						<label for="endDateInput">EndDate </label>
						<DatePicker
							name="endDate"
							id="endDateInput"
							selected={data.endDate}
							onChange={(date) => setData({ ...data, endDate: date })}
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-success" onClick={handleCreate}>
						Create
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CreateJam3ya;
