import {
  PROFILE_DATA_REQUEST,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_FAIL,
  UPDATE_ME_REQUEST,
  UPDATE_ME_SUCCESS,
  UPDATE_ME_RESET,
  UPDATE_ME_FAIL,
  CLEAR_ERRORS
} from '../constants/Profile'

export const profileDataReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case PROFILE_DATA_REQUEST:
      return {
        loading: true,
				isAuthenticated: false,
      }

    case PROFILE_DATA_SUCCESS:
      return {
        ...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload.data
      }

    case PROFILE_DATA_FAIL:
      return {
				loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload
			}

    case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}

    default:
      return state
  }
}

export const updateMeReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_ME_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_ME_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case UPDATE_ME_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}

		default:
			return state
  }
}