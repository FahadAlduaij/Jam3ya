import React from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function Jam3ya(props) {
    // const jam3yaSlug = usePrams().jam3yaSlug
    const time =  props.startDate
	return (
		<div>
        
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.image} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>
						{props.amount}
					</Card.Text>
					<Card.Text>
						{props.limit}
					</Card.Text>
		
						
					
			
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
           
		</div>
	);
}

export default Jam3ya;
