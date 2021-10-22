import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Jam3yaList from "./Components/Jam3yaList";
import ButtonHeader from "./Components/ButtonHeader";
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

				<Route exact path="/">
					<div className="header-text">
						<h1 className="">
							How To Get More Money With 6 or More Months!
						</h1>
						<p>Join Now to Start Earing Profit</p>

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
