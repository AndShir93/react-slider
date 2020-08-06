import React from "react";
import "./sliderWrapper.css";

let arr = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];
let i = 0;

class SliderWrapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: arr[i] };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount() {
    this.slider();
  }

  slider() {
    this.idInterval = setInterval(() => this.next(), 3000);
  }

  next() {
    if (i < arr.length - 1) {
      i++;
      this.setState({ image: arr[i] });
    } else {
      this.setState({ image: arr[0] });
      i = 0;
    }
    clearInterval(this.idInterval);
    this.slider();
  }
  prev() {
    if (i >= 1) {
      i--;
      this.setState({
        image: arr[i],
      });
    } else {
      this.setState({
        image: arr[arr.length - 1],
      });
      i = arr.length - 1;
    }
    clearInterval(this.idInterval);
    this.slider();
  }

  render() {
    return (
      <div>
        <div className="slider__wrapper">
          <img className="slider__images" src={this.state.image} />
        </div>
        <div className="btn-wrapper">
          <button onClick={this.prev}>-</button>
          <button onClick={this.next}>+</button>
        </div>
      </div>
    );
  }
}

export default SliderWrapp;
