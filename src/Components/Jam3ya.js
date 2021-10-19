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
					<Card.Title>
						<strong>Title: </strong>
						{props.title}
					</Card.Title>

					<Card.Text>
						<strong>Amount: </strong> {props.amount}
					</Card.Text>
					<Card.Text>
						<strong>Limit: </strong> {props.limit}
					</Card.Text>

					<Card.Text>
						<strong>Start Date: </strong>
						<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					</Card.Text>

					<Card.Text>
						<strong>End Date: </strong>
						<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					</Card.Text>

					<br />

					<Button variant="success">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default observer(Jam3ya);
