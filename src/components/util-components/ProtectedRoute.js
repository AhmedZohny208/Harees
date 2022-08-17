import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export default function ProtectedRoute({ component: Component, ...rest }) {

  const { isAuthenticated, loading } = useSelector(state => state.ownerAuth)

  return (
    <>
      {loading === false && (
        <Route 
          {...rest}
          render={props => {
            if (isAuthenticated === false) {
              return <Redirect to={`/${AUTH_PREFIX_PATH}/login`} />
            }

            return <Component {...props} />
          }}
        />
      )}
    </>
  )
}
