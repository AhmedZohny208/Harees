import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_SUPERVISORS_REQUEST,
  ALL_SUPERVISORS_SUCCESS,
  ALL_SUPERVISORS_FAIL,
  CREATE_SUPERVISOR_REQUEST,
  CREATE_SUPERVISOR_SUCCESS,
  CREATE_SUPERVISOR_FAIL,
  UPDATE_SUPERVISOR_REQUEST,
  UPDATE_SUPERVISOR_SUCCESS,
  UPDATE_SUPERVISOR_FAIL,
  DELETE_SUPERVISOR_REQUEST,
  DELETE_SUPERVISOR_SUCCESS,
  DELETE_SUPERVISOR_FAIL,
  SUPERVISOR_DETAILS_REQUEST,
  SUPERVISOR_DETAILS_SUCCESS,
  SUPERVISOR_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Supervisor'

export const querySupervisors = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: ALL_SUPERVISORS_REQUEST })

    let link = `${HOST}/owner/supervisor-users?page=${currentPage}&itemsPerPage=10&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_SUPERVISORS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_SUPERVISORS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerSupervisor = (supervisorData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_SUPERVISOR_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/supervisor-users`, supervisorData, config)

    dispatch({
      type: CREATE_SUPERVISOR_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_SUPERVISOR_FAIL,
      payload: error.response.data
    })
  }
}

export const updateSupervisor = (id, supervisorData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_SUPERVISOR_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/supervisor-users/${id}`, supervisorData, config)

    dispatch({
      type: UPDATE_SUPERVISOR_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_SUPERVISOR_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteSupervisor = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_SUPERVISOR_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/supervisor-users/${id}`)

    dispatch({
      type: DELETE_SUPERVISOR_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_SUPERVISOR_FAIL,
        payload: error.response.data
    })
  }
}

export const getSupervisorDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: SUPERVISOR_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/SUPERVISOR-users/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: SUPERVISOR_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SUPERVISOR_DETAILS_FAIL,
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