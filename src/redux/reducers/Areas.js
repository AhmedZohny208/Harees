import {
  ALL_AREAS_REQUEST,
  ALL_AREAS_SUCCESS,
  ALL_AREAS_FAIL,
  CREATE_AREA_REQUEST,
  CREATE_AREA_SUCCESS,
  CREATE_AREA_RESET,
  CREATE_AREA_FAIL,
  UPDATE_AREA_REQUEST,
  UPDATE_AREA_SUCCESS,
  UPDATE_AREA_RESET,
  UPDATE_AREA_FAIL,
  DELETE_AREA_REQUEST,
  DELETE_AREA_SUCCESS,
  DELETE_AREA_RESET,
  DELETE_AREA_FAIL,
  AREA_DETAILS_REQUEST,
  AREA_DETAILS_SUCCESS,
  AREA_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Areas'

export const registerAreaReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_AREA_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_AREA_SUCCESS:
      return {
        loading: false,
        area: action.payload
      }

    case CREATE_AREA_RESET:
      return {
        loading: false,
        area: null
      }
    
    case CREATE_AREA_FAIL:
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

export const areaDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case AREA_DETAILS_REQUEST:
      return {
        loading: true
      }

    case AREA_DETAILS_SUCCESS:
      return {
        loading: false,
        area: action.payload
      }

    case AREA_DETAILS_FAIL:
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

export const areaReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_AREA_REQUEST:
    case DELETE_AREA_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_AREA_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_AREA_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_AREA_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_AREA_FAIL:
    case DELETE_AREA_FAIL:
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