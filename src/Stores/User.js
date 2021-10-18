import axios from "axios";
import { makeObservable, observable } from "mobx";
import jwtDecode from "jwt-decode";
import api from "../Api/api";

class UserData {
	constructor() {
		makeObservable(this, {
			user: observable,
		});
	}

	user = null;

	setUser = (token) => {
		localStorage.setItem("myToken", token);
		api.defaults.headers.common.Authorization = `Bearer ${token}`;
		this.user = jwtDecode(token);
	};

	signUp = async (userData) => {
		try {
			const response = await api.post("/signup", userData);
            console.log(response.data)
		} catch (error) {
			console.log(error);
		}
	};
}

const userData = new UserData();
this.signUp()
export default userData;
