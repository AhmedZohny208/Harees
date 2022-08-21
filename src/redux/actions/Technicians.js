import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_TECHNICIANS_REQUEST,
  ALL_TECHNICIANS_SUCCESS,
  ALL_TECHNICIANS_FAIL,
  CREATE_TECHNICIAN_REQUEST,
  CREATE_TECHNICIAN_SUCCESS,
  CREATE_TECHNICIAN_FAIL,
  UPDATE_TECHNICIAN_REQUEST,
  UPDATE_TECHNICIAN_SUCCESS,
  UPDATE_TECHNICIAN_FAIL,
  DELETE_TECHNICIAN_REQUEST,
  DELETE_TECHNICIAN_SUCCESS,
  DELETE_TECHNICIAN_FAIL,
  TECHNICIAN_DETAILS_REQUEST,
  TECHNICIAN_DETAILS_SUCCESS,
  TECHNICIAN_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Technicians'

export const queryTechnicians = (currentPage=1, itemsPerPage=10, serviceCategory) => async (dispatch) => {
  console.log(serviceCategory);
  try {
    dispatch({ type: ALL_TECHNICIANS_REQUEST })

    let link = `${HOST}/owner/technician-users?page=${currentPage}&itemsPerPage=${itemsPerPage}&sortBy=createdAt&ascendingOrder=true${serviceCategory && `&_serviceCategory=${serviceCategory}`}`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_TECHNICIANS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_TECHNICIANS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerTechnician = (technicianData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_TECHNICIAN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/technician-users`, technicianData, config)

    dispatch({
      type: CREATE_TECHNICIAN_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_TECHNICIAN_FAIL,
      payload: error.response.data
    })
  }
}

export const updateTechnician = (id, technicianData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_TECHNICIAN_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/technician-users/${id}`, technicianData, config)

    dispatch({
      type: UPDATE_TECHNICIAN_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_TECHNICIAN_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteTechnician = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_TECHNICIAN_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/technician-users/${id}`)

    dispatch({
      type: DELETE_TECHNICIAN_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_TECHNICIAN_FAIL,
        payload: error.response.data
    })
  }
}

export const getTechnicianDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: TECHNICIAN_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/technician-users/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: TECHNICIAN_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TECHNICIAN_DETAILS_FAIL,
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