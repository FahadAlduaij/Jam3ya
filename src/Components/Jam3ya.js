import React from "react";
import Moment from "react-moment";
import { observer } from "mobx-react";
import { Card } from "react-bootstrap";
import Jam3yaDetail from "./Jam3yaDetail";
import { Link } from "react-router-dom";

function Jam3ya(props) {
	// const jam3yaSlug = usePrams().jam3yaSlug
	const startDateJam3ya = new Date(props.jam3ya.startDate);
	const endDateJam3ya = new Date(props.jam3ya.endDate);

	

	return (
		<div className="card-container">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					className="image-container"
					variant="top"
					src={props.jam3ya.image}
				/>
				<Card.Body>
					<Card.Title>
						<center>
							<strong>Title: </strong>
							{props.jam3ya.title}
						</center>
					</Card.Title>
					<br />

					<Card.Text>
						<strong>Amount: </strong> {props.jam3ya.amount} KD
					</Card.Text>
					<Card.Text>
						<strong>Limit: </strong> {props.jam3ya.limit}
					</Card.Text>

					<Card.Text>
						<strong>Start Date: </strong>
						<Moment format="YYYY/MM/DD" date={startDateJam3ya} />
					</Card.Text>

					<Card.Text>
						<strong>End Date: </strong>
						<Moment format="YYYY/MM/DD" date={endDateJam3ya} />
					</Card.Text>

					<br />

					<Jam3yaDetail jam3ya={props.jam3ya} />
				</Card.Body>
			</Card>
		</div>
	);
}

export default observer(Jam3ya);
