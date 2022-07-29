import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Avatar, Tag } from 'antd'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined
} from '@ant-design/icons'
import data from 'configs/organizationData'
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
      title: 'Organization Name',
      dataIndex: 'orgName',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Representative Name',
      dataIndex: 'represetativeName',
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
      title: 'Representative Position',
      dataIndex: 'represetativePosition'
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      hidden: true
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      hidden: true
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      hidden: true
    },
    {
      title: 'Package Type',
      dataIndex: 'packageType'
    },
    {
      title: 'Activated',
      dataIndex: 'isActivated',
      render: text => (
        text === true ? <Tag color="#2A9F20">true</Tag> : <Tag color="#EB001B">false</Tag>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/home/supervisors/update/${record.id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Organization Details'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Create New Organization' onclick={() => history.push(`${APP_PREFIX_PATH}/organization/create`)} />}
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
