import React, { useState, useEffect } from 'react'
import { Table, Card, Avatar, Pagination, Space, message } from 'antd'
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
import { queryTenants, deleteTenant, clearErrors } from 'redux/actions/Tenants'
import { DELETE_TENANT_RESET } from 'redux/constants/Tenants'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TENANTS
  const { loading, tenants, itemsTotalCount, error } = useSelector(state => state.allTenants)
  // DELETE TENANT
  const { isDeleted, error: errorDelete } = useSelector(state => state.tenant)

  useEffect(() => {
    dispatch(queryTenants(currentPage))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_TENANT_RESET })
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

  const showDeleteModal = (id) => {
    setCurrentId(id)
    isDeleteVisible(true)
  }
  const handleOkDeleteModal = () => {
    dispatch(deleteTenant(currentId))
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
      title: 'Tenant Name',
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
      title: 'Area',
      dataIndex: '_area',
      render: text => <span className='fw-600'>{text && text.title}</span>
    },
    {
      title: 'Action',
      key: 'action',
      width: 165,
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/tenants/${record._id}`)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/tenants/update/${record._id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Tenants'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Add New Tenant' onclick={() => history.push(`${APP_PREFIX_PATH}/tenants/create`)} />}
      >
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          tenants && tenants.length > 0 ? (
            <Table
              columns={columns}
              dataSource={tenants}
              pagination={false}
              rowKey={tenants => tenants._id}
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
    </>
  )
}
