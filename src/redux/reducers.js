import * as actionTypes from './actionTypes'


export default (state = [], action) => {
    switch(action.type){
        case actionTypes.NEXT_IMG: {
            return './images/3.jpg'
        }
        case actionTypes.PREV_IMG: {
            return './images/1.jpg'
        }
        default:
            return state
    }
}