import React, { useState, useEffect } from 'react'
import { message } from 'antd'
import BreadcrumbC from './Breadcrumb'
import MainCard from './MainCard'
import Table from './Table'
import DisplayModal from 'components/shared-components/modals/DisplayService'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { useDispatch, useSelector } from 'react-redux'
import { queryServices, deleteService, getServiceDetails, clearErrors } from 'redux/actions/Services'
import { DELETE_SERVICE_RESET } from 'redux/constants/Services'

export default function Services() {
  const dispatch = useDispatch()

  const [currentId, setCurrentId] = useState('')
  const [deleteVisible, isDeleteVisible] = useState(false)
  const [displayVisible, isDisplayVisible] = useState(false)

  // QUERY SERVICES
  const { loading, services, error } = useSelector(state => state.allServices)
  // DELETE SERVICE
  const { isDeleted, error: errorDelete } = useSelector(state => state.services)
  // SERVICE DETAILS
  const { service } = useSelector(state => state.serviceDetails)

  const showDisplayModal = (id, record) => {
    setCurrentId(id)
    dispatch(getServiceDetails(id))
    isDisplayVisible(true)
  }
  const handleCancelDisplayModal = () => {
    isDisplayVisible(false)
  }

  const showDeleteModal = (id) => {
    setCurrentId(id)
    isDeleteVisible(true)
  }
  const handleOkDeleteModal = () => {
    dispatch(deleteService(currentId))
    isDeleteVisible(false)
  }
  const handleCancelDeleteModal = () => {
    isDeleteVisible(false)
  }

  useEffect(() => {
    dispatch(queryServices())

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_SERVICE_RESET })
    }

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
    if (errorDelete) {
      message.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, isDeleted, error, errorDelete])

  return (
    <div>
      <BreadcrumbC />

      <div className='mt-4'>
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          <>
            <MainCard services={services} />
            <Table 
              services={services} 
              showDeleteModal={showDeleteModal} 
              showDisplayModal={showDisplayModal}
            />
          </>
        )}
      </div>

      <DisplayModal record={service} visible={displayVisible} onCancel={handleCancelDisplayModal} />
      <DeletePopup onConfirm={handleOkDeleteModal} visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </div>
  )
}
