import React from "react";
import "./sliderWrapper.css";
import { connect } from 'react-redux';
import { setCurrent, localSlider } from "../../redux/actions";

class SliderWrapp extends React.Component {

  

  setCurrent(){
    let { current } = this.props
    let count = () => this.props.isLocal?this.props.localImages.length-1:this.props.remoteImages.length-1
    if(current >= count()){
      current = 0
    }else{
      current++
    }
    this.props.setCurrent(current)
  }

  localSlider(){
    let { isLocal, current } = this.props
    current = 0
    isLocal = !isLocal
    this.props.localSlider(isLocal, current)
  }

  render() {
    return (
      <div>
        <div className="slider__wrapper">
          <img className="slider__images" src={this.props[this.props.isLocal?'localImages':'remoteImages'][this.props.current]} />
        </div>
        <div className="btn-wrapper">
          <button onClick={() => this.setCurrent()}>-</button>
          <button onClick={() => this.localSlider()}>Переход</button>
          <button onClick={() => this.setCurrent()}>+</button>
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
  setCurrent(current){
    dispatch(setCurrent(current))
  },
  localSlider(isLocal, current){
    dispatch(localSlider(isLocal, current))
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(SliderWrapp)
