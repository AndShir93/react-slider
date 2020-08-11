import React from "react";
import "./sliderWrapper.css";
import { connect } from 'react-redux';
import { nextImage, prevImage, localSlider } from "../../redux/actions";

class SliderWrapp extends React.Component {

  next() {
    let { current } = this.props;
    if(current === this.props.localImages.length - 1){
      current = 0
    }else{
      current++
    }
    this.props.nextImage(current)
  }

  prev(){
    let { current } = this.props;
    if(current === 0){
      current = this.props.localImages.length - 1
    }else{
      current--
    }
    this.props.nextImage(current)
  }

  localSlider(){
    let { isLocal } = this.props
    isLocal = !isLocal
    this.props.localSlider(isLocal)
  }

  render() {
    return (
      <div>
        <div className="slider__wrapper">
          <img className="slider__images" src={this.props[this.props.isLocal?'localImages':'remoteImages'][this.props.current]} />
        </div>
        <div className="btn-wrapper">
          <button onClick={() => this.prev()}>-</button>
          <button onClick={() => this.localSlider()}>Переход</button>
          <button onClick={() => this.next()}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  current: state.current,
  isLocal: state.isLocal,
  localImages: state.localImages,
  remoteImages: state.remoteImages
})
const mapDispatchToProps = (dispatch) => ({
  nextImage(current){
    dispatch(nextImage(current))
  },
  prevImage(current){
    dispatch(prevImage(current))
  },
  localSlider(isLocal){
    dispatch(localSlider(isLocal))
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(SliderWrapp)
