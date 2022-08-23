import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'
import { getProfileData } from "redux/actions/Profile";

export default function ProtectedRoute({ component: Component, ...rest }) {

  const dispatch = useDispatch()
  const { isAuthenticated, loading } = useSelector(state => state.profileData)

  useEffect(() => {
    dispatch(getProfileData())
  }, [dispatch])

  return (
    <>
      {loading === false && (
        <Route 
          {...rest}
          render={props => {
            if (isAuthenticated === false) {
              return <Redirect to={`${AUTH_PREFIX_PATH}/login`} />
            }

            return <Component {...props} />
          }}
        />
      )}
    </>
  )
}
