import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Tag, Avatar } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import data from 'configs/invoiceData'
import CreateBtn from 'components/shared-components/buttons/Create'
import Utils from 'utils'
import { COLORS } from 'constants/ChartConstant'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import SelectSearch from 'components/shared-components/Form/SelectSearch'

function ExtraCard() {
  const history = useHistory()
  return (
    <>
      <SelectSearch />
      <CreateBtn text='Create a new invoice' onclick={() => history.push(`${APP_PREFIX_PATH}/invoices/create`)} />
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
      dataIndex: 'id',
      hidden: true
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
      dataIndex: 'issuedBy',
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
      title: 'Status',
      dataIndex: 'status',
      render: text => (
        <>
          {text === 'Paid' ? (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Paid
            </Tag>
          ) : (
            <Tag icon={<ExclamationCircleOutlined />} color="warning">
              Pending
            </Tag>
          )}
        </>
      )
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
          <EditOutlined className='edit-btn ml-0' onClick={() => history.push(`${APP_PREFIX_PATH}/invoices/update/${record.id}`)} />
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
        rowKey={data => data.id}
      />
    </Card>
    
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
