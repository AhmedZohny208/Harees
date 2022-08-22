import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Avatar, message, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import CreateBtn from 'components/shared-components/buttons/Create'
import Utils from 'utils'
import { COLORS } from 'constants/ChartConstant'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { queryTechnicians, deleteTechnician, clearErrors } from 'redux/actions/Technicians'
import { DELETE_TECHNICIAN_RESET } from 'redux/constants/Technicians'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TECHNICIANS
  const { loading, technicians, itemsTotalCount, error } = useSelector(state => state.allTechnicians)
  // DELETE TECHNICIAN
  const { isDeleted, error: errorDelete } = useSelector(state => state.technician)

  useEffect(() => {
    dispatch(queryTechnicians(currentPage, 10, ''))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_TECHNICIAN_RESET })
    }

    if (error) {
      console.log(error);
      dispatch(clearErrors())
    }
    if (errorDelete) {
      message.error(errorDelete);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, isDeleted, error, errorDelete])

  const showDeleteModal = (id) => {
    setCurrentId(id)
    isDeleteVisible(true)
  }
  const handleOkDeleteModal = () => {
    dispatch(deleteTechnician(currentId))
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
      title: 'Technician Name',
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
      title: 'Team Name',
      dataIndex: 'team',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Service Category',
      dataIndex: '_serviceCategory',
      render: text => <span className='fw-600'>{text && text.name}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/technician/${record._id}`)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/technician/update/${record._id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Technician'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Add New Technician' onclick={() => history.push(`${APP_PREFIX_PATH}/technician/create`)} />}
      >
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          technicians && technicians.length > 0 ? (
            <Table
              columns={columns}
              dataSource={technicians}
              pagination={false}
              rowKey={data => data._id}
            />
          ) : (
            <h4 className='text-center mt-5'>NO TECHNICIANS FOUND</h4>
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
    </>
  )
}
