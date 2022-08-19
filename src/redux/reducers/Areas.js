import {
  ALL_AREAS_REQUEST,
  ALL_AREAS_SUCCESS,
  ALL_AREAS_FAIL,
  CLEAR_ERRORS
} from '../constants/Areas'

export const allAreasReducer = (state = { areas: [] }, action) => {
  switch (action.type) {

    case ALL_AREAS_REQUEST:
      return {
        loading: true
      }

    case ALL_AREAS_SUCCESS:
      return {
        loading: false,
        areas: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_AREAS_FAIL:
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

