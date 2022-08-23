import {
  COMPOUND_STATISTICS_REQUEST,
  COMPOUND_STATISTICS_SUCCESS,
  COMPOUND_STATISTICS_FAIL,
  TICKETS_COUNT_DOM_REQUEST,
  TICKETS_COUNT_DOM_SUCCESS,
  TICKETS_COUNT_DOM_FAIL,
  CLEAR_ERRORS
} from '../constants/Statistics'

export const compoundStatisticsReducer = (state = { statistics: {} }, action) => {
  switch (action.type) {

    case COMPOUND_STATISTICS_REQUEST:
      return {
        loading: true
      }

    case COMPOUND_STATISTICS_SUCCESS:
      return {
        loading: false,
        statistics: action.payload,
      }

    case COMPOUND_STATISTICS_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}

		default:
			return state;
  }
}

export const getDomHistogramDataReducer = (state = { domData: {} }, action) => {
  switch (action.type) {

    case TICKETS_COUNT_DOM_REQUEST:
      return {
        loading: true
      }

    case TICKETS_COUNT_DOM_SUCCESS:
      return {
        loading: false,
        domData: action.payload,
        horizontalAxis: action.payload.histogramData.horizontalAxis,
        verticalAxis: action.payload.histogramData.verticalAxis,
      }

    case TICKETS_COUNT_DOM_FAIL:
      return {
        loading: false,
        error: action.payload
      }

    case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}

		default:
			return state;
  }
}