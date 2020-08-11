import * as actionTypes from './actionTypes'
import initialState from './initialState'
let i = 0

export default (state, action) => {

    function slide(){
        if(state.typeSlider){
            switch (i){
                case -1:
                    i = 2
                    return initialState().localImages[i];
                    break;
                case 2:
                    i = 0
                    return initialState().localImages[i];
                    break;
                default:
                    i = i+1;
                    return initialState().localImages[i]
            }
        }else{
            switch (i){
            case -1:
                i = 2
                return initialState().remoteImages[i];
                break;
            case 2:
                i = 0
                return initialState().remoteImages[i];
                break;
            default:
                i = i+1;
                return initialState().remoteImages[i]
            }
        }
    }

    switch(action.type){
        case actionTypes.NEXT_IMG: {
            return {...state, image: slide()}
        }
        case actionTypes.PREV_IMG: {
            return {...state, image: slide()}
        }
        case actionTypes.LOCAL_SLIDER: {
            console.log(state.typeSlider)
            return {...state, typeSlider: !state.typeSlider}
        }
        default:
            return state
    }
}