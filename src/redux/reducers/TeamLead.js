import {
  ALL_TEAMLEADS_REQUEST,
  ALL_TEAMLEADS_SUCCESS,
  ALL_TEAMLEADS_FAIL,
  CREATE_TEAMLEAD_REQUEST,
  CREATE_TEAMLEAD_SUCCESS,
  CREATE_TEAMLEAD_RESET,
  CREATE_TEAMLEAD_FAIL,
  UPDATE_TEAMLEAD_REQUEST,
  UPDATE_TEAMLEAD_SUCCESS,
  UPDATE_TEAMLEAD_RESET,
  UPDATE_TEAMLEAD_FAIL,
  DELETE_TEAMLEAD_REQUEST,
  DELETE_TEAMLEAD_SUCCESS,
  DELETE_TEAMLEAD_RESET,
  DELETE_TEAMLEAD_FAIL,
  TEAMLEAD_DETAILS_REQUEST,
  TEAMLEAD_DETAILS_SUCCESS,
  TEAMLEAD_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/TeamLead'

export const registerTeamLeadReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_TEAMLEAD_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_TEAMLEAD_SUCCESS:
      return {
        loading: false,
        teamLead: action.payload
      }

    case CREATE_TEAMLEAD_RESET:
      return {
        loading: false,
        teamLead: null
      }
    
    case CREATE_TEAMLEAD_FAIL:
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

export const allTeamleadsReducer = (state = { teamLeads: [] }, action) => {
  switch (action.type) {

    case ALL_TEAMLEADS_REQUEST:
      return {
        loading: true
      }

    case ALL_TEAMLEADS_SUCCESS:
      return {
        loading: false,
        teamLeads: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_TEAMLEADS_FAIL:
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

export const teamLeadDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case TEAMLEAD_DETAILS_REQUEST:
      return {
        loading: true
      }

    case TEAMLEAD_DETAILS_SUCCESS:
      return {
        loading: false,
        teamLead: action.payload
      }

    case TEAMLEAD_DETAILS_FAIL:
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

export const teamleadReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_TEAMLEAD_REQUEST:
    case DELETE_TEAMLEAD_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_TEAMLEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_TEAMLEAD_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_TEAMLEAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_TEAMLEAD_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_TEAMLEAD_FAIL:
    case DELETE_TEAMLEAD_FAIL:
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
