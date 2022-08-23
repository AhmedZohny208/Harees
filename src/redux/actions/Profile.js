import axios from 'axios';
import { HOST } from 'constants/ApiConstant';
import {
  PROFILE_DATA_REQUEST,
  PROFILE_DATA_SUCCESS,
  PROFILE_DATA_FAIL,
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

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}