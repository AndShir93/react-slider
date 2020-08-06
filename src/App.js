import React from "react";
import HomePage from './components/homePages/homePages';
import Slider from './components/slider/slider';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="main-menu">
          <ul className="main-menu__list main-menu-list">
            <li className="main-menu-list__item">
              <Link to="/">Главная</Link>
            </li>
            <li className="main-menu-list__item">
              <Link to="/slider">Слайдер</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/slider">
            <Slider />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}