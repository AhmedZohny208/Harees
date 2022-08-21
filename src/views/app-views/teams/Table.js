import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Pagination, message } from 'antd'
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
import DisplayModal from 'components/shared-components/modals/DisplayTeam'
import { queryTeams, getTeamDetails, deleteTeam, clearErrors } from 'redux/actions/Teams'
import { DELETE_TEAM_RESET } from 'redux/constants/Teams'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TEAMS
  const { loading, teams, itemsTotalCount, error } = useSelector(state => state.allTeams)
  const { loading: loadingDetails, team, error: errorDetails } = useSelector(state => state.teamDetails)
  const { isDeleted, error: errorDelete } = useSelector(state => state.team)

  const showDisplayModal = (id) => {
    setCurrentId(id)
    dispatch(getTeamDetails(id))
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
    dispatch(deleteTeam(currentId))
    isDeleteVisible(false)
  }
  const handleCancelDeleteModal = () => {
    isDeleteVisible(false)
  }

  useEffect(() => {
    dispatch(queryTeams(currentPage))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_TEAM_RESET })
    }

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
    if (errorDetails) {
      message.error(errorDetails);
      dispatch(clearErrors())
    }
    if (errorDelete) {
      message.error(errorDelete);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, isDeleted, error, errorDelete])

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
          <EyeOutlined className='display-btn' onClick={() => showDisplayModal(record._id)} />
          <EditOutlined className='edit-btn' onClick={() => {
            dispatch(getTeamDetails(record._id))
            history.push(`${APP_PREFIX_PATH}/teams/update/${record._id}`)
          }} />
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
    
    <DeletePopup onConfirm={handleOkDeleteModal} visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    <DisplayModal loading={loadingDetails} team={team} visible={displayVisible} onCancel={handleCancelDisplayModal} />
    </>
  )
}
