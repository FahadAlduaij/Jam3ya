import { makeAutoObservable } from "mobx";
import api from "../Api/api";
import userData from "./User";
import moment from "moment";
class Jam3yaStore {
	jam3yat = [];
	joined = true;

	constructor() {
		makeAutoObservable(this, {});
	}

	fetchJam3ya = async () => {
		try {
			const response = await api.get("/jam3ya");
			this.jam3yat = response.data;
		} catch (error) {
			console.log(error);
		}
	};
	createJam3ya = async (jam3yaData) => {
		try {
			const response = await api.post("/jam3ya", jam3yaData);
			this.jam3yat.push(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	joinJam3ya = async (jam3yaid) => {
		const currentJam3ya = this.jam3yat.find(
			(jam3ya) => jam3ya._id === jam3yaid
		);
		const numberofusers = currentJam3ya.users.length + 1;

		const todayDate = Date.now();
		const currentDate = moment(todayDate).format("YYYY/MM/DD");
		const jam3yaStartDate = moment(currentJam3ya.startDate).format(
			"YYYY/MM/DD"
		);
		
		if (userData.user === null) {
			this.joined = false;
			console.log("No User");
		} else if (
			+numberofusers > +currentJam3ya.limit ||
			currentDate >= jam3yaStartDate
		) {
			this.joined = false;
			console.log("Cant Join this Jam3ya");
		} else {
			this.joined = true;
			console.log("joinded");

			try {
				const response = await api.post(`/jam3ya/join/${jam3yaid}`);
			} catch (error) {
				console.log(error);
			}
		}
	};
}

const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
