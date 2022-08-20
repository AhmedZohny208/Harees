import {
  ALL_TEAMS_REQUEST,
  ALL_TEAMS_SUCCESS,
  ALL_TEAMS_FAIL,
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_RESET,
  CREATE_TEAM_FAIL,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_RESET,
  UPDATE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_RESET,
  DELETE_TEAM_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Teams'

export const registerTeamReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_TEAM_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_TEAM_SUCCESS:
      return {
        loading: false,
        team: action.payload
      }

    case CREATE_TEAM_RESET:
      return {
        loading: false,
        team: null
      }
    
    case CREATE_TEAM_FAIL:
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

export const allTEAMsReducer = (state = { teams: [] }, action) => {
  switch (action.type) {

    case ALL_TEAMS_REQUEST:
      return {
        loading: true
      }

    case ALL_TEAMS_SUCCESS:
      return {
        loading: false,
        teams: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_TEAMS_FAIL:
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

export const teamDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case TEAM_DETAILS_REQUEST:
      return {
        loading: true
      }

    case TEAM_DETAILS_SUCCESS:
      return {
        loading: false,
        team: action.payload
      }

    case TEAM_DETAILS_FAIL:
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

export const teamReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_TEAM_REQUEST:
    case DELETE_TEAM_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_TEAM_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_TEAM_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_TEAM_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_TEAM_FAIL:
    case DELETE_TEAM_FAIL:
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