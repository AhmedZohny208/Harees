import React, { useState, useEffect } from 'react'
import { Table, Card, Space, message } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import data from 'configs/tenantsData'
import CreateBtn from 'components/shared-components/buttons/Create'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DisplayModal from 'components/shared-components/modals/DisplayTenants'
import DeletePopup from 'components/shared-components/modals/DeletePopup'

export default function TableC() {
  const history = useHistory()

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

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
      dataIndex: 'tenantName',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Unit ID',
      dataIndex: 'unitID',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Compound Name',
      dataIndex: 'compoundName'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Action',
      key: 'action',
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
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Card>
      
      <DeletePopup onConfirm={handleOkDeleteModal} visible={deleteVisible} onCancel={handleCancelDeleteModal} />

      <DisplayModal visible={displayVisible} onCancel={handleCancelDisplayModal} />
    </>
  )
}
