import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_TEAMLEADS_REQUEST,
  ALL_TEAMLEADS_SUCCESS,
  ALL_TEAMLEADS_FAIL,
  CREATE_TEAMLEAD_REQUEST,
  CREATE_TEAMLEAD_SUCCESS,
  CREATE_TEAMLEAD_FAIL,
  UPDATE_TEAMLEAD_REQUEST,
  UPDATE_TEAMLEAD_SUCCESS,
  UPDATE_TEAMLEAD_FAIL,
  DELETE_TEAMLEAD_REQUEST,
  DELETE_TEAMLEAD_SUCCESS,
  DELETE_TEAMLEAD_FAIL,
  TEAMLEAD_DETAILS_REQUEST,
  TEAMLEAD_DETAILS_SUCCESS,
  TEAMLEAD_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/TeamLead'

export const queryTeamLeads = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: ALL_TEAMLEADS_REQUEST })

    let link = `${HOST}/owner/teamlead-users?page=${currentPage}&itemsPerPage=10&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_TEAMLEADS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_TEAMLEADS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerTeamLead = (teamLeadData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_TEAMLEAD_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/teamlead-users`, teamLeadData, config)

    dispatch({
      type: CREATE_TEAMLEAD_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_TEAMLEAD_FAIL,
      payload: error.response.data
    })
  }
}

export const updateTeamLead = (id, teamLeadData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_TEAMLEAD_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/teamLead-users/${id}`, teamLeadData, config)

    dispatch({
      type: UPDATE_TEAMLEAD_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_TEAMLEAD_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteTeamLead = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_TEAMLEAD_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/teamlead-users/${id}`)

    dispatch({
      type: DELETE_TEAMLEAD_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_TEAMLEAD_FAIL,
        payload: error.response.data
    })
  }
}

export const getTeamLeadDataDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: TEAMLEAD_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/teamlead-users/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: TEAMLEAD_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TEAMLEAD_DETAILS_FAIL,
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