import React from 'react';
import './sliderWrapper.css';

let arr=['./images/1.jpg','./images/2.jpg','./images/3.jpg'];
let i = 0;

class SliderWrapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: arr[i],
                  speed: 1};
    this.faster = this.faster.bind(this)
  }
  
  faster(){
    this.setState((prevState, props) => ({
      speed: prevState.speed / 2
    }));
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.next(),2000 * this.state.speed);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }  
  next() {
      if(i < arr.length-1){
          i++;
          this.setState({
              image: arr[i],
              speed: this.state.speed
          });
      }else{
          this.setState({
              image: arr[0]
          });
          i = 0;
      }
  }

  render() {
    return (
      <div>
          <div className="slider__wrapper">
              <img className="slider__images" src={this.state.image}/>
          </div>
          <div className="btn-wrapper">            
            <button onClick={this.faster}>+</button>
            <button>-</button>
          </div>
      </div>
    );
  }
}

export default SliderWrapp;