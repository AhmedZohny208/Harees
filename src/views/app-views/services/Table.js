import React from 'react'
import { Table, Card, Space } from 'antd'
import { useHistory } from 'react-router-dom'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons'
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export default function TableC({ services, showDeleteModal, showDisplayModal }) {
  const history = useHistory()

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
          <EyeOutlined className='display-btn' onClick={() => {
            showDisplayModal(record._id, record)
          }} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/services/update/${record._id}`)} />
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
    </>
  )
}
