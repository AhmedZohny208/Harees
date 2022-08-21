import React, { useEffect } from 'react'
import { message } from 'antd'
import BreadcrumbC from './Breadcrumb'
import MainCard from './MainCard'
import Table from './Table'
import { useDispatch, useSelector } from 'react-redux'
import { queryServices, clearErrors } from 'redux/actions/Services'

export default function Services() {
  const dispatch = useDispatch()

  // QUERY SERVICES
  const { loading, services, error } = useSelector(state => state.allServices)

  useEffect(() => {
    dispatch(queryServices())

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch])

  return (
    <div>
      <BreadcrumbC />

      <div className='mt-4'>
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          <>
            <MainCard services={services} />
            <Table services={services} />
          </>
        )}
      </div>
    </div>
  )
}
