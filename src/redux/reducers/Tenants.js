import {
  ALL_TENANTS_REQUEST,
  ALL_TENANTS_SUCCESS,
  ALL_TENANTS_FAIL,
  CREATE_TENANT_REQUEST,
  CREATE_TENANT_SUCCESS,
  CREATE_TENANT_RESET,
  CREATE_TENANT_FAIL,
  UPDATE_TENANT_REQUEST,
  UPDATE_TENANT_SUCCESS,
  UPDATE_TENANT_RESET,
  UPDATE_TENANT_FAIL,
  DELETE_TENANT_REQUEST,
  DELETE_TENANT_SUCCESS,
  DELETE_TENANT_RESET,
  DELETE_TENANT_FAIL,
  TENANT_DETAILS_REQUEST,
  TENANT_DETAILS_SUCCESS,
  TENANT_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Tenants'

export const registerTenantReducer = (state = {}, action) => {
  switch (action.type) {

    case CREATE_TENANT_REQUEST:
      return {
        ...state,
        loading: true
      }
    
    case CREATE_TENANT_SUCCESS:
      return {
        loading: false,
        tenant: action.payload
      }

    case CREATE_TENANT_RESET:
      return {
        loading: false,
        tenant: null
      }
    
    case CREATE_TENANT_FAIL:
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

export const allTenantsReducer = (state = { tenants: {} }, action) => {
  switch (action.type) {

    case ALL_TENANTS_REQUEST:
      return {
        loading: true
      }

    case ALL_TENANTS_SUCCESS:
      return {
        loading: false,
        tenants: action.payload.items,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        itemsTotalCount: action.payload.itemsTotalCount
      }

    case ALL_TENANTS_FAIL:
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

export const tenantDetailsReducer = (state = {}, action) => {
  switch (action.type) {

    case TENANT_DETAILS_REQUEST:
      return {
        loading: true
      }

    case TENANT_DETAILS_SUCCESS:
      return {
        loading: false,
        tenant: action.payload,
        tickets: action.payload.ticketsData
      }

    case TENANT_DETAILS_FAIL:
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

export const tenantReducer = (state = {}, action) => {
  switch (action.type) {

    case UPDATE_TENANT_REQUEST:
    case DELETE_TENANT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case UPDATE_TENANT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: true
      }

    case UPDATE_TENANT_RESET:
      return {
        ...state,
        loading: false,
        isUpdated: false
      }

    case DELETE_TENANT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      }

    case DELETE_TENANT_RESET:
      return {
        ...state,
        loading: false,
        isDeleted: false
      }

    case UPDATE_TENANT_FAIL:
    case DELETE_TENANT_FAIL:
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
