import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_TENANTS_REQUEST,
  ALL_TENANTS_SUCCESS,
  ALL_TENANTS_FAIL,
  CREATE_TENANT_REQUEST,
  CREATE_TENANT_SUCCESS,
  CREATE_TENANT_FAIL,
  UPDATE_TENANT_REQUEST,
  UPDATE_TENANT_SUCCESS,
  UPDATE_TENANT_FAIL,
  DELETE_TENANT_REQUEST,
  DELETE_TENANT_SUCCESS,
  DELETE_TENANT_FAIL,
  TENANT_DETAILS_REQUEST,
  TENANT_DETAILS_SUCCESS,
  TENANT_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Tenants'

export const queryTenants = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: ALL_TENANTS_REQUEST })

    let link = `${HOST}/owner/tenant-users?page=${currentPage}&itemsPerPage=10&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_TENANTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_TENANTS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerTenant = (tenantData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_TENANT_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/tenant-users`, tenantData, config)

    dispatch({
      type: CREATE_TENANT_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_TENANT_FAIL,
      payload: error.response.data
    })
  }
}

export const updateTenant = (id, tenantData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_TENANT_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/tenant-users/${id}`, tenantData, config)

    dispatch({
      type: UPDATE_TENANT_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_TENANT_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteTenant = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_TENANT_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/tenant-users/${id}`)

    dispatch({
      type: DELETE_TENANT_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_TENANT_FAIL,
        payload: error.response.data
    })
  }
}

export const getTenantDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: TENANT_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/tenant-users/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: TENANT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TENANT_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}