import React from "react";
import Jam3ya from "./Jam3ya";
import jam3yaStore from "../Stores/Jam3yaStore";
import { observer } from "mobx-react";
import CreateJam3ya from "./CreateJam3ya";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Jam3yaList() {
	const array = jam3yaStore.jam3yat.map((jam3ya) => <Jam3ya jam3ya={jam3ya} />);

	return (
		<div className=" my-font">
			<center className="m-5">
				<div className="search-bar">
					<InputGroup className="mb-3">
						<Button variant="secondary">Search</Button>
						<FormControl aria-label="Default" placeholder="Enter Title" />
					</InputGroup>
					{/* <select className=' '>
						<option>All</option>
						<option>10</option>
						<option>20</option>
						<option>50</option>
						<option>100</option>
					</select> */}
				</div>
				<br />
				<CreateJam3ya />
			</center>
			<div className="cards-container">{array}</div>
		</div>
	);
}

export default observer(Jam3yaList);
