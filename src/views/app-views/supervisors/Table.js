import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Avatar, Pagination, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons'
import CreateBtn from 'components/shared-components/buttons/Create'
import Utils from 'utils'
import { COLORS } from 'constants/ChartConstant'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DisplayModal from 'components/shared-components/modals/DisplaySupervisor'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { querySupervisors, deleteSupervisor, getSupervisorDetails, clearErrors } from 'redux/actions/Supervisor'
import { DELETE_SUPERVISOR_RESET } from 'redux/constants/Supervisor'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY SUPERVISORS
  const { loading, supervisors, itemsTotalCount, error } = useSelector(state => state.allSupervisors)
  // DELETE SUPERVISOR
  const { isDeleted, error: errorDelete } = useSelector(state => state.Supervisor)
  // GET DETAILS
  const { supervisor, loading: loadingDetails } = useSelector(state => state.supervisorDetails)

  useEffect(() => {
    dispatch(querySupervisors(currentPage))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_SUPERVISOR_RESET })
    }

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
    if (errorDelete) {
      message.error(errorDelete);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, isDeleted, error, errorDelete])

  const showDisplayModal = (id) => {
    setCurrentId(id)
    dispatch(getSupervisorDetails(id))
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
    dispatch(deleteSupervisor(currentId))
    isDeleteVisible(false)
  }
  const handleCancelDeleteModal = () => {
    isDeleteVisible(false)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
      hidden: true
    },
    {
      title: 'Supervisor Name',
      dataIndex: 'fullName',
      render: (text, record, index) => (
        <div className='d-flex align-items-center'>
          <Avatar
            size={30}
            className='font-size-sm'
            style={{ backgroundColor: COLORS[index % 10] }}
          >
            {Utils.getNameInitial(text)}
          </Avatar>
          <span className='ml-2 fw-600'>{text}</span>
        </div>
      ),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => showDisplayModal(record._id)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/supervisors/update/${record._id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
    <Card
      title='Supervisors'
      bordered={false}
      style={{ marginBottom: '480px' }}
      extra={<CreateBtn text='Create a new supervisor' onclick={() => history.push(`${APP_PREFIX_PATH}/supervisors/create`)} />}
    >
      {loading ? (
        <h4 className='text-center mt-5'>Loading...</h4>
      ) : (
        supervisors && supervisors.length > 0 ? (
          <Table
            columns={columns}
            dataSource={supervisors}
            pagination={false}
            rowKey={data => data._id}
          />
        ) : (
          <h4 className='text-center mt-5'>NO TENANTS FOUND</h4>
        )
      )}
      <div className="pagination">
        <Pagination 
          defaultCurrent={1} 
          defaultPageSize={10}
          total={itemsTotalCount} 
          onChange={(page) => {
            setCurrentPage(page)
          }}
        />
      </div>
    </Card>
    
    <DeletePopup onConfirm={handleOkDeleteModal} visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    <DisplayModal supervisor={supervisor} loading={loadingDetails} visible={displayVisible} onCancel={handleCancelDisplayModal} />
    </>
  )
}
