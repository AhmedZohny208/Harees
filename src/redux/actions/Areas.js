import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_AREAS_REQUEST,
  ALL_AREAS_SUCCESS,
  ALL_AREAS_FAIL,
  CLEAR_ERRORS
} from '../constants/Areas'

export const queryAreas = (currentPage = 1, itemsPerPage = 10) => async (dispatch) => {
  try {
    dispatch({ type: ALL_AREAS_REQUEST })

    let link = `${HOST}/owner/area?page=${currentPage}&itemsPerPage=${itemsPerPage}&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_AREAS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_AREAS_FAIL,
      payload: error.response.data,
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}