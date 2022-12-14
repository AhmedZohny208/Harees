import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Avatar } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import data from 'configs/operatorsData'
import CreateBtn from 'components/shared-components/buttons/Create'
import Utils from 'utils'
import { COLORS } from 'constants/ChartConstant'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DeletePopup from 'components/shared-components/modals/DeletePopup'

export default function TableC() {
  const history = useHistory()

  const [currentId, setCurrentId] = useState('')
  const [deleteVisible, isDeleteVisible] = useState(false)

  useEffect(() => {
    console.log(currentId);
  }, [currentId])

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
      dataIndex: 'id',
      hidden: true
    },
    {
      title: 'Full Name',
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
      title: 'Email Address',
      dataIndex: 'email'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EditOutlined className='edit-btn ml-0' onClick={() => history.push(`${APP_PREFIX_PATH}/operator/update/${record.id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Operators'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Create New Operator' onclick={() => history.push(`${APP_PREFIX_PATH}/operator/create`)} />}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey={data => data.id}
        />
      </Card>
      
      <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
