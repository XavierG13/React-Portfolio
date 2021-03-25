import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/Home"]} component={Home} />
          <Route exact path={["/Details"]} component={Details} />
          {/* <Route exact path={["/Portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/Contact"]}>
            <ContactMe />
          </Route> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
