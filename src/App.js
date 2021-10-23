import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jam3yaList from "./Components/Jam3yaList";
import ButtonHeader from "./Components/ButtonHeader";
import AboutUs from "./Components/AboutUs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<Switch>
			<div>
				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<NavBar />

				<Route exact path="/Jam3ya">
					<Jam3yaList />
				</Route>

				<Route exact path='/AboutUs'>
					<AboutUs />
				</Route>

				<Route exact path="/">
					<div className="header-text">
						<p> How To Get More Money</p>
						<h1 className="">Join Now To Start Earing Profit</h1>

						<div className="button-container">
							<ButtonHeader />
						</div>
					</div>
				</Route>
			</div>
		</Switch>
	);
}

export default App;
