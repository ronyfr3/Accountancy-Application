import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import About from "./Layouts/about/About";
import "./sass/main.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
