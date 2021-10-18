import React from "react";
import Jam3ya from "./Jam3ya";
import jam3yaStore from "../Stores/Jam3yaStore";
import { observer } from "mobx-react";
import CreateJam3ya from "./CreateJam3ya";

function Jam3yaList() {
	const array = jam3yaStore.jam3yat.map((jam3ya) => (
		<Jam3ya title={jam3ya.title} image={jam3ya.image} amount={jam3ya.amount} limit={jam3ya.limit} startDate={jam3ya.startDate} endDate={jam3ya.endDate} />
	));

	return (
		<div>
            <CreateJam3ya />
			{array}
		</div>
	);
}

export default observer(Jam3yaList);
