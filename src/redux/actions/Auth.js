import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS
} from '../constants/Auth'
import { HOST } from "constants/ApiConstant";

export const login = ({ email, password, fireBaseId, language }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const config = {
			header: {
				'content-Type': 'application/json'
			}
		}

    const data = await axios.post(`${HOST}/owner/signing/login`, {
      email, password, fireBaseId, language
    }, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data
    })
  }
}

// Logout
export const logout = () => async (dispatch) => {
	try {

		await axios.get(`${HOST}/owner/signing/logout`)

		dispatch({
			type: LOGOUT_SUCCESS,
		})
		
	} catch (error) {
		dispatch({
			type: LOGOUT_FAIL,
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