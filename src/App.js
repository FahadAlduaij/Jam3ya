import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Jam3yaList from "./Components/Jam3yaList";
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
        />{" "}
        <Header />
        <Route exact path="/Jam3ya">
          <Jam3yaList />
        </Route>
        <Route exact path="/">
          <div className="w-100 h-100 d-inline-block p-3">
            <h1 className="header-text ">
              How To Get Money With 6 or More Months!
            </h1>

            <div class="row">
              <div class="col-md-3 col-sm-3 col-xs-6">
                {" "}
                <a href="#" class="btn btn-sm animated-button thar-four">
                  Find Jam3ya Now!
                </a>{" "}
              </div>
            </div>
          </div>
        </Route>
      </div>
    </Switch>
  );
}

export default App;
