import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import jwtDecode from 'jwt-decode';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'
import { getProfileData } from "redux/actions/Profile";

export default function ProtectedRoute({ component: Component, ...rest }) {

  const dispatch = useDispatch()
  const { isAuthenticated, loading } = useSelector(state => state.profileData)

  useEffect(() => {
    dispatch(getProfileData())
  }, [dispatch])

  function isAuth() {
    const token = localStorage.getItem('HaressOwnerjwtToken');
    try {
      const { exp } = jwtDecode(token);
      if (Date.now() >= exp * 1000) {
        return false;
      }
    } catch (err) {
      return false;
    }
    return true;
  }
  let isAuthValid = isAuth()

  return (
    <>
      {loading === false && (
        <Route 
          {...rest}
          render={props => {
            if (!localStorage.getItem('HaressOwnerjwtToken')) {
              return <Redirect to={`${AUTH_PREFIX_PATH}/login`} />
            }
            if (!isAuthValid) {
              return <Redirect to={`${AUTH_PREFIX_PATH}/login`} />
            }

            if (!isAuthValid && isAuthenticated === false) {
              return <Redirect to={`${AUTH_PREFIX_PATH}/login`} />
            }

            return <Component {...props} />
          }}
        />
      )}
    </>
  )
}
