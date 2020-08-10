import * as actionTypes from './actionTypes'

export const nextImage = (image) => ({ type: actionTypes.NEXT_IMG, image})
export const prevImage = (image) => ({ type: actionTypes.PREV_IMG, image})