import axios from '../../configs/APIConfig';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS
} from '../constants/Auth'

export const login = ({ email, password, fireBaseId, language }) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const { data } = await axios.post('/owner/signing/login', {
      email, password, fireBaseId, language
    })

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error
    })
  }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}