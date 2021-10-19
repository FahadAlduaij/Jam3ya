import React from "react";
// import Moment from 'react-moment'
import { observer } from "mobx-react";
import { Card, Button } from "react-bootstrap";

function Jam3ya(props) {
  // const jam3yaSlug = usePrams().jam3yaSlug

  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="image-container" variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.amount}</Card.Text>
          <Card.Text>{props.limit}</Card.Text>
          <Card.Text>{props.startDate}</Card.Text>
          <Card.Text>{props.endDate}</Card.Text>

          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default observer(Jam3ya);
