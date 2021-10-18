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

	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const [data, setData] = useState({
		title: "",
		image: "",
		amount: 0,
		limit: 0,
		startDate: "",
		endDate: "",
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
			<Button variant="primary" onClick={handleShow}>
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
					<Modal.Title>Create Jam3ya</Modal.Title>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
				</Modal.Header>
				<Modal.Body>
					<div className="form-group m-2">
						<label for="exampleInputEmail1">Title </label>
						<input
							onChange={handleChange}
							name="title "
							type="text"
							className="form-control "
							id="exampleInputEmail1"
							placeholder="Enter The Title"
						/>
					</div>
					<div className="form-group m-2">
						<label for="exampleInputEmail1">Image </label>
						<input
							onChange={handleChange}
							name="image "
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter Image URL"
						/>
					</div>
					<div className="form-group m-2">
						<label for="exampleInputPassword1">Amount </label>
						<input
							onChange={handleChange}
							name="amount"
							type="number"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter Amount"
						/>
					</div>
					<div className="form-group m-2">
						<label for="exampleInputPassword1">Limit </label>
						<input
							onChange={handleChange}
							name="limit"
							type="number"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter Limit"
						/>
					</div>
					<div className="form-group m-2">
						<label for="exampleInputPassword1">StartDate </label>
						<DatePicker
							selected={startDate}
							name="startDate"
							onChange={(date) => setStartDate(date)}
						/>
						{/* <input
							onChange={handleChange}
							name="startDate"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter Limit"
						/> */}
					</div>
					<div className="form-group m-2">
						<label for="exampleInputPassword1">EndDate </label>
						<DatePicker
							name="endDate"
							selected={endDate}
							onChange={(date) => setEndDate(date)}
						/>
						{/* <input
							onChange={handleChange}
							name="endDate"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter Limit"
						/> */}
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button className="btn btn-primary" onClick={handleCreate}>
						Create
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default CreateJam3ya;
