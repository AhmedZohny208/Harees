import {
  ALL_TECHNICIANS_REQUEST,
  ALL_TECHNICIANS_SUCCESS,
  ALL_TECHNICIANS_FAIL,
  CREATE_TECHNICIAN_REQUEST,
  CREATE_TECHNICIAN_SUCCESS,
  CREATE_TECHNICIAN_RESET,
  CREATE_TECHNICIAN_FAIL,
  UPDATE_TECHNICIAN_REQUEST,
  UPDATE_TECHNICIAN_SUCCESS,
  UPDATE_TECHNICIAN_RESET,
  UPDATE_TECHNICIAN_FAIL,
  DELETE_TECHNICIAN_REQUEST,
  DELETE_TECHNICIAN_SUCCESS,
  DELETE_TECHNICIAN_RESET,
  DELETE_TECHNICIAN_FAIL,
  TECHNICIAN_DETAILS_REQUEST,
  TECHNICIAN_DETAILS_SUCCESS,
  TECHNICIAN_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Technicians'

export const registerTechnicianReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_TECHNICIAN_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_TECHNICIAN_SUCCESS:
      return {
        loading: false,
        technician: action.payload
      }

    case CREATE_TECHNICIAN_RESET:
      return {
        loading: false,
        technician: null
      }
    
    case CREATE_TECHNICIAN_FAIL:
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

export const allTechniciansReducer = (state = { technicians: [] }, action) => {
  switch (action.type) {

    case ALL_TECHNICIANS_REQUEST:
      return {
        loading: true
      }

    case ALL_TECHNICIANS_SUCCESS:
      return {
        loading: false,
        technicians: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_TECHNICIANS_FAIL:
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

export const technicianDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case TECHNICIAN_DETAILS_REQUEST:
      return {
        loading: true
      }

    case TECHNICIAN_DETAILS_SUCCESS:
      return {
        loading: false,
        technician: action.payload,
        tickets: action.payload.ticketsData
      }

    case TECHNICIAN_DETAILS_FAIL:
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

export const technicianReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_TECHNICIAN_REQUEST:
    case DELETE_TECHNICIAN_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_TECHNICIAN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_TECHNICIAN_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_TECHNICIAN_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_TECHNICIAN_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_TECHNICIAN_FAIL:
    case DELETE_TECHNICIAN_FAIL:
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
