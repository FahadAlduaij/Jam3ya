import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import api from "../Api/api";

class Jam3yaStore {
	jam3yat = [];
	constructor() {
		makeAutoObservable(this);
	}

	fetchJam3ya = async () => {
		try {
			const response = await api.get("/jam3ya");
			this.jam3yat = response.data;
		} catch (error) {
			console.log(error);
		}
	};
	createJam3ya = async (jam3ya) => {
		try {
			const response = await api.post("/jam3ya", jam3ya);

			this.jam3yat.push(response.data);
		} catch (error) {
			console.log(error);
		}
	};
}

const jam3yaStore = new Jam3yaStore();
jam3yaStore.fetchJam3ya();
export default jam3yaStore;
