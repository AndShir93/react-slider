import * as actionTypes from './actionTypes'

export const nextImage = (current) => ({ type: actionTypes.NEXT_IMG, current})
export const prevImage = (current) => ({ type: actionTypes.PREV_IMG, current})
//export const setCurrent = (current) => ({type: actionTypes.SET_CURRENT, current})
export const localSlider = (isLocal) => ({type: actionTypes.SET_IS_LOCAL, isLocal})