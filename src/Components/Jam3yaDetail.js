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

  const [joined, setJoined] = useState("Join");
  const [joinedStatus, setjoinedStatus] = useState(false);
  const [color, setColor] = useState("primary");

  const changeJoin = () => {
    if (jam3yaStore.joined === false) {
      setjoinedStatus(false);
      setColor("danger");
      setJoined(`Sorry, You Can't Join This Jam3ya`);
    } else {
      setjoinedStatus(true);
      setColor("success");
      setJoined(
        `Welcome ${userData.user.username.toUpperCase()}, You Are a Member Now`
      );
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
  };

  return (
    <>
      <Button
        className="detail-btn"
        variant="outline-secondary"
        onClick={(e) => {
          setShow(true);
        }}
      >
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

          <Button variant="outline-danger" onClick={handleClose}>
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

        <center>
          <div>
            <h5>
              {/* <strong>Users: </strong> */}
              Users:
            </h5>
          </div>
        </center>
        <div className="footer-users">
          <p>{jam3yaUsers} </p>
        </div>
        {/* <Modal.Footer className="footer-users">
          <div>
            <p>{jam3yaUsers} </p>
          </div>
        </Modal.Footer> */}
        <Modal.Footer className="footer-buttons">
          <Button
            className="detail-btn"
            active
            variant={color}
            onClick={() => {
              jam3yaStore.joinJam3ya(props.jam3ya._id);
              changeJoin();
            }}
          >
            {joined}
          </Button>

          <Button onClick={handleDelete} type="submit">
            delete
          </Button>
          <Button onClick={handleLeave} type="submit">
            leave
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default observer(Jam3yaDetail);
