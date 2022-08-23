import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  COMPOUND_STATISTICS_REQUEST,
  COMPOUND_STATISTICS_SUCCESS,
  COMPOUND_STATISTICS_FAIL,
  TICKETS_COUNT_DOM_REQUEST,
  TICKETS_COUNT_DOM_SUCCESS,
  TICKETS_COUNT_DOM_FAIL,
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
      payload: error.response.data
    })
  }
}

// Get DOM Histogram data
export const getDomHistogramData = (monthDate) => async (dispatch) => {
  try {
    dispatch({ type: TICKETS_COUNT_DOM_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/statistics/tickets/dom-histogram-data?monthDate=${monthDate}`)

    dispatch({
      type: TICKETS_COUNT_DOM_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TICKETS_COUNT_DOM_FAIL,
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