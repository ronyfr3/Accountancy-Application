import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import About from "./Layouts/about/About";
import FAQ from "./Layouts/FAQ";
import Career from "./Layouts/Career";
import Contact from "./Layouts/contact/Contact";
import Service from "./Layouts/Service";
import "react-multi-carousel/lib/styles.css";
import "./sass/main.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
