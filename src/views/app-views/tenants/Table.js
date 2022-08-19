import React, { useState, useEffect } from 'react'
import { Table, Card, Pagination, Space, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import CreateBtn from 'components/shared-components/buttons/Create'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DisplayModal from 'components/shared-components/modals/DisplayTenants'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { queryTenants, clearErrors } from 'redux/actions/Tenants'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [keyword, setKeyword] = useState('')

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TENANTS
  const { loading, tenants, itemsTotalCount, error } = useSelector(state => state.allTenants)

  useEffect(() => {
    dispatch(queryTenants(currentPage))

    if (error) {
      console.log(error);
    }
  }, [dispatch, currentPage, error])

  useEffect(() => {
    console.log(currentId);
  }, [currentId])

  const showDisplayModal = (id) => {
    setCurrentId(id)
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
    isDeleteVisible(false)
    message.success('Record has been deleted successfully')
  }
  const handleCancelDeleteModal = () => {
    isDeleteVisible(false)
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      hidden: true
    },
    {
      title: 'Tenant Name',
      dataIndex: 'fullName',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Area',
      dataIndex: '_area',
      render: text => <span className='fw-600'>{text && text.title}</span>
    },
    // {
    //   title: 'Unit ID',
    //   dataIndex: 'unitID',
    //   render: text => <span className='fw-600'>{text}</span>
    // },
    // {
    //   title: 'Compound Name',
    //   dataIndex: 'compoundName'
    // },
    // {
    //   title: 'Phone Number',
    //   dataIndex: 'phoneNumber',
    // },
    {
      title: 'Action',
      key: 'action',
      width: 165,
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => showDisplayModal(record._id)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/tenants/update/${record.id}`)} />
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
        {tenants && tenants.length > 0 ? (
          <>
            <Table
              columns={columns}
              dataSource={tenants}
              pagination={false}
              rowKey={data => data.id}
            />
          </>
        ) : (
          <h4 className='text-center mt-5'>Loading...</h4>
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

      <DisplayModal visible={displayVisible} onCancel={handleCancelDisplayModal} />
    </>
  )
}
