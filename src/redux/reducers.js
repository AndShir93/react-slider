import * as actionTypes from './actionTypes'

export default (state = [], action) => {

    switch(action.type){
        case actionTypes.NEXT_IMG: {
            return Object.assign({},state, {
                current: action.current
            })
        }
        case actionTypes.PREV_IMG: {
            return Object.assign({},state, {
                current: action.current
            })
        }
        case actionTypes.SET_IS_LOCAL: {
            return Object.assign({},state, {
                isLocal: action.isLocal,
                current: action.current
            })
        }
        default:
            return state
    }
}