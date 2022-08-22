import {
  COMPOUND_STATISTICS_REQUEST,
  COMPOUND_STATISTICS_SUCCESS,
  COMPOUND_STATISTICS_FAIL,
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