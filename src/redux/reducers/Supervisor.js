import {
  ALL_SUPERVISORS_REQUEST,
  ALL_SUPERVISORS_SUCCESS,
  ALL_SUPERVISORS_FAIL,
  CREATE_SUPERVISOR_REQUEST,
  CREATE_SUPERVISOR_SUCCESS,
  CREATE_SUPERVISOR_RESET,
  CREATE_SUPERVISOR_FAIL,
  UPDATE_SUPERVISOR_REQUEST,
  UPDATE_SUPERVISOR_SUCCESS,
  UPDATE_SUPERVISOR_RESET,
  UPDATE_SUPERVISOR_FAIL,
  DELETE_SUPERVISOR_REQUEST,
  DELETE_SUPERVISOR_SUCCESS,
  DELETE_SUPERVISOR_RESET,
  DELETE_SUPERVISOR_FAIL,
  SUPERVISOR_DETAILS_REQUEST,
  SUPERVISOR_DETAILS_SUCCESS,
  SUPERVISOR_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Supervisor'

export const registerSupervisorReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_SUPERVISOR_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_SUPERVISOR_SUCCESS:
      return {
        loading: false,
        supervisor: action.payload
      }

    case CREATE_SUPERVISOR_RESET:
      return {
        loading: false,
        supervisor: null
      }
    
    case CREATE_SUPERVISOR_FAIL:
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

export const allSupervisorsReducer = (state = { supervisors: [] }, action) => {
  switch (action.type) {

    case ALL_SUPERVISORS_REQUEST:
      return {
        loading: true
      }

    case ALL_SUPERVISORS_SUCCESS:
      return {
        loading: false,
        supervisors: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_SUPERVISORS_FAIL:
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

export const supervisorDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case SUPERVISOR_DETAILS_REQUEST:
      return {
        loading: true
      }

    case SUPERVISOR_DETAILS_SUCCESS:
      return {
        loading: false,
        supervisor: action.payload
      }

    case SUPERVISOR_DETAILS_FAIL:
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

export const SupervisorReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_SUPERVISOR_REQUEST:
    case DELETE_SUPERVISOR_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_SUPERVISOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_SUPERVISOR_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_SUPERVISOR_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_SUPERVISOR_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_SUPERVISOR_FAIL:
    case DELETE_SUPERVISOR_FAIL:
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
