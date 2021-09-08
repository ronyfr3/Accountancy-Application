import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import ErrorBoundary from "./ErrorBoundary";
import Preloader from "./Preloader";
import LazyLoadingMessage from "./LazyLoadingMessage";
//STYLING
import "./sass/main.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-multi-carousel/lib/styles.css";
// REACT.LAZY COMPONENT
const Service = React.lazy(() => import("./Layouts/Service"));
const About = React.lazy(() => import("./Layouts/about/About"));
const Contact = React.lazy(() => import("./Layouts/contact/Contact"));
const Career = React.lazy(() => import("./Layouts/Career"));
const FAQ = React.lazy(() => import("./Layouts/FAQ"));
const Resources = React.lazy(() => import("./Layouts/Resources"));
const News = React.lazy(() => import("./Layouts/News"));

const App = () => {
  return (
    <div className="app">
      <Preloader />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <ErrorBoundary>
          <Suspense fallback={<LazyLoadingMessage />}>
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/resource" component={Resources} />
            <Route exact path="/news" component={News} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
