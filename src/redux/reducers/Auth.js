import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS
} from '../constants/Auth'

export const ownerAuthReducer = (state = { user: {} }, action) => {
  switch (action.type) {


    case LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
				isAuthenticated: true,
				user: action.payload.data,
        token: action.payload.headers['x-auth-token'],
        refreshToken: action.payload.headers['x-auth-refresh-token']
      }

    case LOGOUT_SUCCESS:
			return {
				loading: false,
				isAuthenticated: false,
				user: null
			}

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
				isAuthenticated: false,
				user: null,
				error: action.payload
      }

    case LOGOUT_FAIL:
			return {
				...state,
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