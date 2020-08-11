import React from "react";
import "./sliderWrapper.css";
import { connect } from 'react-redux';
import { nextImage, prevImage, localSlider } from "../../redux/actions";

class SliderWrapp extends React.Component {

  nextImage() {
    let { image } = this.props;
    this.props.nextImage(image)
  }

  prevImage(){
    let { image } = this.props;
    this.props.prevImage(image)
  }
  localSlider(){
    let { typeSlider } = this.props;
    this.props.localSlider(typeSlider)
  }

  render() {
    return (
      <div>
        <div className="slider__wrapper">
          <img className="slider__images" src={this.props.image} />
        </div>
        <div className="btn-wrapper">
          <button onClick={() => this.prevImage()}>-</button>
          <button onClick={() => this.localSlider()}>Переход</button>
          <button onClick={() => this.nextImage()}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: state.image
})
const mapDispatchToProps = (dispatch) => ({
  nextImage(image){
    dispatch(nextImage(image))
  },
  prevImage(image){
    dispatch(prevImage(image))
  },
  localSlider(image){
    dispatch(localSlider(image))
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(SliderWrapp)
