import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_SERVICES_REQUEST,
  ALL_SERVICES_SUCCESS,
  ALL_SERVICES_FAIL,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
  UPDATE_SERVICE_REQUEST,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Services'

export const queryServices = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_SERVICES_REQUEST })

    let link = `${HOST}/owner/service-category`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_SERVICES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_SERVICES_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerService = (serviceData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_SERVICE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/service-category`, serviceData, config)

    dispatch({
      type: CREATE_SERVICE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_SERVICE_FAIL,
      payload: error.response.data
    })
  }
}

export const updateService = (id, serviceData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_SERVICE_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/service-category/${id}`, serviceData, config)

    dispatch({
      type: UPDATE_SERVICE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_SERVICE_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteService = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_SERVICE_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/service-category/${id}`)

    dispatch({
      type: DELETE_SERVICE_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_SERVICE_FAIL,
        payload: error.response.data
    })
  }
}

export const getServiceDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: SERVICE_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/service-category/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: SERVICE_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SERVICE_DETAILS_FAIL,
      payload: error.response.data,
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}