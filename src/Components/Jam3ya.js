import React from "react";
import Moment from "react-moment";
import { observer } from "mobx-react";
import { Card, Button } from "react-bootstrap";

function Jam3ya(props) {
	// const jam3yaSlug = usePrams().jam3yaSlug
	const startDateJam3ya = new Date(props.startDate);
	const endDateJam3ya = new Date(props.endDate);

	return (
		<div className="card-container">
			<Card style={{ width: "18rem" }}>
				<Card.Img className="image-container" variant="top" src={props.image} />
				<Card.Body>
					<Card.Title>Title: {props.title}</Card.Title>
					<Card.Text>Amount: {props.amount}</Card.Text>
					<Card.Text>Limit: {props.limit}</Card.Text>
					<Card.Text>Start Date:</Card.Text>
					<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					<Card.Text>End Date:</Card.Text>
					<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					<br />
					<Button variant="success">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default observer(Jam3ya);
