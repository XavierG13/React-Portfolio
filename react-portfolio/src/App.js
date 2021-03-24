import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/About-Me"]}>
            <AboutMe />
          </Route>
          <Route exact path={["/Portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path={["/Contact"]}>
            <ContactMe />
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;