import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import "./sass/main.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
