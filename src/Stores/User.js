import { action, makeObservable, observable } from "mobx";
import decode from "jwt-decode";
import api from "../Api/api";

class UserData {
	user = null;
	constructor() {
		makeObservable(this, {
			user: observable,
			signUp: action,
			signIn: action,
			logOut: action,
		});
	}

	setUser = (token) => {
		localStorage.setItem("myToken", token);
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = decode(token);
	};

	signUp = async (userDataName) => {
		try {
			const response = await api.post("/signup", userDataName);
			this.setUser(response.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	signIn = async (userDataName) => {
		try {
			const response = await api.post("/signin", userDataName);
			this.setUser(response.data.token);
		} catch (error) {
			console.log(error);
		}
	};

	logOut = () => {
		delete api.defaults.headers.common.Authorization;
		localStorage.removeItem("myToken");
		this.user = null;
	};

	checkForToken = () => {
		const token = localStorage.getItem("myToken");
		if (token) {
			const currentTime = Date.now();
			let tempUser = decode(token);
			if (tempUser.exp >= currentTime) {
				this.user = decode(token);
			} else {
				this.logOut();
			}
		}
	};
}

const userData = new UserData();
userData.checkForToken();
export default userData;
