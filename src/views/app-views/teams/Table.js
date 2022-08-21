import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import CreateBtn from 'components/shared-components/buttons/Create'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { queryTeams, clearErrors } from 'redux/actions/Teams'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TEAMS
  const { loading, teams, itemsTotalCount, error } = useSelector(state => state.allTeams)

  useEffect(() => {
    dispatch(queryTeams(currentPage))

    if (error) {
      console.log(error);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, error])

  useEffect(() => {
    console.log(currentId);
  }, [currentId])

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
      dataIndex: '_id',
      hidden: true
    },
    {
      title: 'Team Name',
      dataIndex: 'title',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Area',
      dataIndex: '_area',
      render: text => <span className='fw-600'>{text && text.title}</span>
    },
    {
      title: 'Number of Technicians',
      dataIndex: 'techniciansCount',
      align: 'center',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Action',
      key: 'action',
      width: '15%',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/teams/update/${record.id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
    <Card
      title='Teams'
      bordered={false}
      style={{ marginBottom: '480px' }}
      extra={<CreateBtn text='Create a new team' onclick={() => history.push(`${APP_PREFIX_PATH}/teams/create`)} />}
    >
      {loading ? (
        <h4 className='text-center mt-5'>Loading...</h4>
      ) : (
        teams && teams.length > 0 ? (
          <Table
            columns={columns}
            dataSource={teams}
            pagination={false}
            rowKey={data => data._id}
          />
        ) : (
          <h4 className='text-center mt-5'>NO TEAMS FOUND</h4>
        )
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
    
    <DeletePopup visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
