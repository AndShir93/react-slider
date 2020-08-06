import React from 'react';
import './homePages.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function HomePage() {
return (
  <div className="container">
    <div className="home-pages">
      <h1 className="home-pages__title">Hello, world!</h1>
      <NavLink className="home-pages__button" to="/slider" activeClassName="hurray">
        Go slider
      </NavLink>
    </div>
  </div>
);
}

export default HomePage;