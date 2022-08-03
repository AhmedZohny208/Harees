import React, { useState, useEffect } from 'react'
import { Table, Card, Space } from 'antd'
import {
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import data from 'configs/unitsData'
import CreateBtn from 'components/shared-components/buttons/Create'
import CreateUnit from 'components/shared-components/modals/CreateUnit'
import UpdateUnit from 'components/shared-components/modals/UpdateUnit'
import DeletePopup from 'components/shared-components/modals/DeletePopup'

export default function TableC() {

  const [currentId, setCurrentId] = useState('')
  const [createVisible, isCreateVisible] = useState(false)
  const [updateVisible, isUpdateVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  useEffect(() => {
    console.log(currentId);
  }, [currentId])

  const showCreateModal = () => {
    isCreateVisible(true)
  }
  const handleOkCreateModal = () => {
    isCreateVisible(false)
  }
  const handleCancelCreateModal = () => {
    isCreateVisible(false)
  }

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
      title: 'Unit Name',
      dataIndex: 'unitName',
      render: text => <span className='ml-2 fw-600'>{text}</span>,
    },
    {
      title: 'Compound Name',
      dataIndex: 'compoundName',
    },
    {
      title: 'Action',
      key: 'action',
      width: '17%',
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
      title='Units'
      bordered={false}
      style={{ marginBottom: '40px' }}
      extra={<CreateBtn text='Create a new unit' onclick={showCreateModal} />}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={data => data.id}
      />
    </Card>

    <CreateUnit visible={createVisible} onCancel={handleCancelCreateModal} onConfirm={handleOkCreateModal} />
    <UpdateUnit visible={updateVisible} onCancel={handleCancelUpdateModal} onConfirm={handleOkUpdateModal} />  
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
