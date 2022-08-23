import axios from 'axios';
import { HOST } from 'constants/ApiConstant';
import {
  PROFILE_DATA_REQUEST,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_FAIL,
	UPDATE_ME_REQUEST,
	UPDATE_ME_SUCCESS,
	UPDATE_ME_FAIL,
  CLEAR_ERRORS
} from '../constants/Profile'

// PROFILE DATA
export const getProfileData = () => async (dispatch) => {
	try {

		dispatch({ type: PROFILE_DATA_REQUEST })

		const storedToken = localStorage.getItem("HaressOwnerjwtToken")
		const config = {
      headers: {
        'X-Auth-Token': storedToken
      }
    }

		const data = await axios.get(`${HOST}/owner/me`, config)

		dispatch({
			type: PROFILE_DATA_SUCCESS,
			payload: data
		})
		
	} catch (error) {
		dispatch({
			type: PROFILE_DATA_FAIL,
			payload: error.response.data
		})
	}
}

// UPDATE ME
export const updateMe = (profileData) => async (dispatch) => {
	try {

    dispatch({ type: UPDATE_ME_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const { data } = await axios.patch(`${HOST}/owner/me`, profileData, config)

    dispatch({
      type: UPDATE_ME_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: UPDATE_ME_FAIL,
      payload: error.response.data
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}