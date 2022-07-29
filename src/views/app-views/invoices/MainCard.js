import React, { useState, useEffect } from 'react'
import { Table, Card, Space } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons'
import data from 'configs/invoiceData'
import CreateBtn from 'components/shared-components/buttons/Create'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import SelectSearch from 'components/shared-components/Form/SelectSearch'

function ExtraCard() {
  const history = useHistory()
  return (
    <>
      <SelectSearch />
      
      <CreateBtn text='Create a new invoice' onclick={() => history.push(`${APP_PREFIX_PATH}/home/compounds/create`)} />
    </>
  )
}

export default function MainCard() {
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
      dataIndex: 'id'
    },
    {
      title: 'Invoice Number',
      dataIndex: 'invoiceNum'
    },
    {
      title: 'Issued Date',
      dataIndex: 'issuedDate'
    },
    {
      title: 'Issued By',
      dataIndex: 'issuedBy'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'payment Method',
      dataIndex: 'paymentMethod'
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/home/compounds/update/${record.id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)
  
  return (
    <>
    <Card
      title='Invoices'
      bordered={false}
      style={{ marginBottom: '480px' }}
      extra={<ExtraCard />}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </Card>
    
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
