import React from 'react';
import './slider.css';
import SliderWrapp from '../sliderWrapp/sliderWrapp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './slider.css';

function Slider() {
  return(
    <div className="container">
      <h2 className="slider-title">Slider!!!</h2>  
      <SliderWrapp />    
      <NavLink className="home-pages__button" to="/" activeClassName="hurray">
        Home Page
      </NavLink>
    </div>
  )
}

export default Slider;