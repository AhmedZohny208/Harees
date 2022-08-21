import React, { useState, useEffect } from 'react'
import { Table, Card, Space } from 'antd'
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import data from 'configs/servicesData'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import UpdateService from 'components/shared-components/modals/UpdateService'

export default function TableC({ services }) {
  const [currentId, setCurrentId] = useState('')
  const [deleteVisible, isDeleteVisible] = useState(false)
  const [updateVisible, isUpdateVisible] = useState(false)

  useEffect(() => {
    console.log(currentId);
  }, [currentId])

  const showUpdateModal = (id) => {
    setCurrentId(id)
    isUpdateVisible(true)
  }
  const handleOkUpdateModal = () => {
    isUpdateVisible(false)
  }
  const handleCancelUpdateModal = () => {
    isUpdateVisible(false)
  }

  const showDeleteModal = (id) => {
    setCurrentId(id)
    isDeleteVisible(true)
  }
  // const handleOkDeleteModal = () => {
  //   isDeleteVisible(false)
  // }
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
      title: 'Service Name',
      dataIndex: 'name',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Service Description',
      dataIndex: 'description',
      render: text => <span>{text}</span>
    },
    {
      title: 'Service Reason',
      dataIndex: 'reason',
      render: text => <span>{text}</span>
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: (text, record) => (
        <Space>
          <EditOutlined className='edit-btn ml-0' onClick={() => showUpdateModal(record.id)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
    <Card
      title='List of Services'
      bordered={false}
      style={{ marginBottom: '80px' }}
    >
      <Table
        columns={columns}
        dataSource={services}
        pagination={false}
        rowKey={data => data.id}
      />
    </Card>
    
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    <UpdateService visible={updateVisible} onCancel={handleCancelUpdateModal} onConfirm={handleOkUpdateModal} />
    </>
  )
}
