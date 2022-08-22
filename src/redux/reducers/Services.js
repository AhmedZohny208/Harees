import {
  ALL_SERVICES_REQUEST,
  ALL_SERVICES_SUCCESS,
  ALL_SERVICES_FAIL,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_RESET,
  CREATE_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_RESET,
  UPDATE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_RESET,
  DELETE_SERVICE_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Services'

export const registerServiceReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_SERVICE_SUCCESS:
      return {
        loading: false,
        service: action.payload
      }

    case CREATE_SERVICE_RESET:
      return {
        loading: false,
        service: null
      }
    
    case CREATE_SERVICE_FAIL:
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
			return state
  }
}

export const allServicesReducer = (state = { services: [] }, action) => {
  switch (action.type) {

    case ALL_SERVICES_REQUEST:
      return {
        loading: true
      }

    case ALL_SERVICES_SUCCESS:
      return {
        loading: false,
        services: action.payload,
      }

    case ALL_SERVICES_FAIL:
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

export const serviceDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case SERVICE_DETAILS_REQUEST:
      return {
        loading: true
      }

    case SERVICE_DETAILS_SUCCESS:
      return {
        loading: false,
        service: action.payload,
      }

    case SERVICE_DETAILS_FAIL:
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

export const servicesReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_SERVICE_REQUEST:
    case DELETE_SERVICE_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_SERVICE_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_SERVICE_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_SERVICE_FAIL:
    case DELETE_SERVICE_FAIL:
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
