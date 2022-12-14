import React, { useState, useEffect } from 'react'
import { Table, Card, Space, Avatar, message, Pagination } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import CreateBtn from 'components/shared-components/buttons/Create'
import Utils from 'utils'
import { COLORS } from 'constants/ChartConstant'
import { useHistory } from 'react-router-dom'
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import DisplayModal from 'components/shared-components/modals/DisplayTeamlead'
import DeletePopup from 'components/shared-components/modals/DeletePopup'
import { queryTeamLeads, getTeamLeadDataDetails, deleteTeamLead, clearErrors } from 'redux/actions/TeamLead'
import { DELETE_TEAMLEAD_RESET } from 'redux/constants/TeamLead'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TEAMLEADS
  const { loading, teamLeads, itemsTotalCount, error } = useSelector(state => state.allTeamleads)
  // DELETE TEAMLEADS
  const { isDeleted, error: errorDelete } = useSelector(state => state.teamlead)
  // GET DETAILS
  const { teamLead, loading: loadingDetails } = useSelector(state => state.teamLeadDetails)

  useEffect(() => {
    dispatch(queryTeamLeads(currentPage))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_TEAMLEAD_RESET })
    }

    if (error) {
      message.error(error);
      dispatch(clearErrors())
    }
    if (errorDelete) {
      message.error(errorDelete);
      dispatch(clearErrors())
    }
  }, [dispatch, currentPage, error, isDeleted, errorDelete])

  const showDisplayModal = (id) => {
    setCurrentId(id)
    dispatch(getTeamLeadDataDetails(id))
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
    dispatch(deleteTeamLead(currentId))
    isDeleteVisible(false)
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
      title: 'Teamlead Name',
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
      title: 'Service Category',
      dataIndex: '_serviceCategory',
      render: text => <span className='fw-600'>{text && text.name}</span>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => showDisplayModal(record._id)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/teamlead/update/${record._id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Teamlead'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Register New Teamlead' onclick={() => history.push(`${APP_PREFIX_PATH}/teamlead/create`)} />}
      >
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          teamLeads && teamLeads.length > 0 ? (
            <Table
              columns={columns}
              dataSource={teamLeads}
              pagination={false}
              rowKey={data => data._id}
            />
          ) : (
            <h4 className='text-center mt-5'>NO TEAMLEADS FOUND</h4>
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
      
      <DisplayModal teamLead={teamLead} loading={loadingDetails} visible={displayVisible} onCancel={handleCancelDisplayModal} />
      <DeletePopup onConfirm={handleOkDeleteModal} visible={deleteVisible} onCancel={handleCancelDeleteModal} />
    </>
  )
}
