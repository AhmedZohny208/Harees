import React, { useState, useEffect } from 'react'
import { Table, Card, Space } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import data from 'configs/packagesData'
import CreateBtn from 'components/shared-components/buttons/Create'
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
      title: 'Package Name',
      dataIndex: 'packageName',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Max Num of Tickets',
      dataIndex: 'ticketsMaxNum'
    },
    {
      title: 'Max Num of Compounds',
      dataIndex: 'compoundsMaxNum'
    },
    {
      title: 'Max Num of Supervisors',
      dataIndex: 'supervisorsMaxNum'
    },
    {
      title: 'Max Num of Tenants',
      dataIndex: 'tenantsMaxNum'
    },
    {
      title: 'Max Num of Labors',
      dataIndex: 'laborsMaxNum'
    },
    {
      title: 'Price',
      dataIndex: 'price'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EditOutlined className='edit-btn ml-0' onClick={() => history.push(`${APP_PREFIX_PATH}/packages/update/${record.id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Packages Details'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Create New Package' onclick={() => history.push(`${APP_PREFIX_PATH}/packages/create`)} />}
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
