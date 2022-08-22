import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  COMPOUND_STATISTICS_REQUEST,
  COMPOUND_STATISTICS_SUCCESS,
  COMPOUND_STATISTICS_FAIL,
  CLEAR_ERRORS
} from '../constants/Statistics'

// Get compound statistics
export const getStatistics = () => async (dispatch) => {
  try {
    dispatch({ type: COMPOUND_STATISTICS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/statistics`)

    dispatch({
      type: COMPOUND_STATISTICS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COMPOUND_STATISTICS_FAIL,
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