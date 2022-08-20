import axios from 'axios'
import { HOST } from 'constants/ApiConstant'
import {
  ALL_AREAS_REQUEST,
  ALL_AREAS_SUCCESS,
  ALL_AREAS_FAIL,
  CREATE_AREA_REQUEST,
  CREATE_AREA_SUCCESS,
  CREATE_AREA_FAIL,
  UPDATE_AREA_REQUEST,
  UPDATE_AREA_SUCCESS,
  UPDATE_AREA_FAIL,
  DELETE_AREA_REQUEST,
  DELETE_AREA_SUCCESS,
  DELETE_AREA_FAIL,
  AREA_DETAILS_REQUEST,
  AREA_DETAILS_SUCCESS,
  AREA_DETAILS_FAIL,
  CLEAR_ERRORS
} from '../constants/Areas'

export const queryAreas = (currentPage = 1, itemsPerPage = 10) => async (dispatch) => {
  try {
    dispatch({ type: ALL_AREAS_REQUEST })

    let link = `${HOST}/owner/area?page=${currentPage}&itemsPerPage=${itemsPerPage}&sortBy=createdAt&ascendingOrder=true`

    const { data } = await axios.get(link)

    dispatch({
      type: ALL_AREAS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_AREAS_FAIL,
      payload: error.response.data,
    })
  }
}

export const registerArea = (areaData) => async (dispatch) => {
  try {

    dispatch({ type: CREATE_AREA_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(`${HOST}/owner/area`, areaData, config)

    dispatch({
      type: CREATE_AREA_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: CREATE_AREA_FAIL,
      payload: error.response.data
    })
  }
}

export const updateArea = (id, areaData) => async (dispatch) => {
  try {

    dispatch({ type: UPDATE_AREA_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/area/${id}`, areaData, config)

    dispatch({
      type: UPDATE_AREA_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_AREA_FAIL,
      payload: error.response.data
    })
  }
}

export const deleteArea = (id) => async (dispatch) => {
  try {

    dispatch({ type: DELETE_AREA_REQUEST })

    const { data } = await axios.delete(`${HOST}/owner/area/${id}`)

    dispatch({
      type: DELETE_AREA_SUCCESS,
      payload: data
    })

  } catch (error) {
      dispatch({
        type: DELETE_AREA_FAIL,
        payload: error.response.data
    })
  }
}

export const getAreaDetails = (id, currentPage = 1) => async (dispatch) => {
  try {
    dispatch({ type: AREA_DETAILS_REQUEST })

    const { data } = await axios.get(`${HOST}/owner/area/${id}?page=${currentPage}&itemsPerPage=10&sortBy=status&ascendingOrder=true`)

    dispatch({
      type: AREA_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: AREA_DETAILS_FAIL,
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