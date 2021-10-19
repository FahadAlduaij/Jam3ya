import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Jam3yaList from "./Components/Jam3yaList";

function App() {
	return (
		<Switch>
			<div>
				<Header />
				<Route exact path="/Jam3ya">
					<Jam3yaList />
				</Route>

				<Route exact path="/">
					<div className="w-100 h-100 d-inline-block p-3">
						<h1 className="header-text ">
							How To Get Money With 6 or More Months!
						</h1>
					</div>
				</Route>
			</div>
		</Switch>
	);
}

export default App;
