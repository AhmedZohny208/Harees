import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_TEAMS_REQUEST,
  ALL_TEAMS_SUCCESS,
  ALL_TEAMS_FAIL,
  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAIL,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Teams'

export const queryTeams = (currentPage) => async (dispatch) => {
  try {
    dispatch({ type: ALL_TEAMS_REQUEST })

    let link = `${HOST}/owner/team?page=${currentPage}&itemsPerPage=10&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_TEAMS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_TEAMS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerTeam = (teamData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_TEAM_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/team`, teamData, config)

    dispatch({
      type: CREATE_TEAM_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_TEAM_FAIL,
      payload: error.response.data
    })
  }
}

export const updateTeam = (id, teamData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_TEAM_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/team/${id}`, teamData, config)

    dispatch({
      type: UPDATE_TEAM_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_TEAM_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteTeam = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_TEAM_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/team/${id}`)

    dispatch({
      type: DELETE_TEAM_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_TEAM_FAIL,
        payload: error.response.data
    })
  }
}

export const getTeamDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/team/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
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