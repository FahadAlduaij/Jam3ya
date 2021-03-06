import React, { useState } from "react";
import Jam3ya from "./Jam3ya";
import jam3yaStore from "../Stores/Jam3yaStore";
import { observer } from "mobx-react";
import CreateJam3ya from "./CreateJam3ya";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Jam3yaList() {
	const [query, setQuery] = useState("");

	let array = jam3yaStore.jam3yat
		.filter((title) => title.title.toLowerCase().includes(query.toLowerCase()))

		.map((jam3ya) => <Jam3ya jam3ya={jam3ya} />);

	return (
		<div className="container-list">
			<div className=" section">
				<div className="search-bar">
					<InputGroup className="mb-5">
						<Button variant="secondary">Search</Button>
						<FormControl
							onChange={(event) => {
								setQuery(event.target.value);
							}}
							aria-label="Default"
							placeholder="Enter Title"
						/>
					</InputGroup>

					{/* <select className=' '>
						<option>All</option>
						<option>10</option>
						<option>20</option>
						<option>50</option>
						<option>100</option>
					</select> */}
				</div>

				<CreateJam3ya />
			</div>
			<br />
			<div className="cards-container">{array}</div>
		</div>
	);
}

export default observer(Jam3yaList);
