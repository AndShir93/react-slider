import * as actionTypes from './actionTypes'

export const setCurrent = (current) => ({ type: actionTypes.NEXT_IMG, current})
//export const setCurrent = (current) => ({type: actionTypes.SET_CURRENT, current})
export const localSlider = (isLocal, current) => ({type: actionTypes.SET_IS_LOCAL, isLocal, current})