import React, { useState, useEffect } from 'react'
import { Table, Card, Pagination, Space, message } from 'antd'
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
import DisplayModal from 'components/shared-components/modals/DisplayArea'
import { queryAreas, getAreaDetails, deleteArea, clearErrors } from 'redux/actions/Areas'
import { DELETE_AREA_RESET } from 'redux/constants/Areas'

export default function TableC() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)

  const [currentId, setCurrentId] = useState('')
  const [displayVisible, isDisplayVisible] = useState(false)
  const [deleteVisible, isDeleteVisible] = useState(false)

  // QUERY TEAMS
  const { loading, areas, itemsTotalCount, error } = useSelector(state => state.allAreas)
  // AREA DETAILS
  const { loading: loadingDetails, area, error: errorDetails } = useSelector(state => state.areaDetails)
  // DELETE TENANT
  const { isDeleted, error: errorDelete } = useSelector(state => state.area)

  useEffect(() => {
    dispatch(queryAreas(currentPage))

    if (isDeleted) {
      message.success('Record has been deleted successfully')
      dispatch({ type: DELETE_AREA_RESET })
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
  }, [dispatch, currentPage, isDeleted, error, errorDelete, errorDetails])

  const showDisplayModal = (id) => {
    setCurrentId(id)
    dispatch(getAreaDetails(id))
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
    dispatch(deleteArea(currentId))
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
      title: 'Area Name',
      dataIndex: 'title',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Tenants Number',
      dataIndex: 'tenantsCount',
      align: 'center',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Teams Number',
      dataIndex: 'teamsCount',
      align: 'center',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Technicians Number',
      dataIndex: 'techniciansCount',
      align: 'center',
      render: text => <span className='fw-600'>{text}</span>
    },
    {
      title: 'Action',
      key: 'action',
      width: 165,
      render: (text, record) => (
        <Space>
          <EyeOutlined className='display-btn' onClick={() => showDisplayModal(record._id)} />
          <EditOutlined className='edit-btn' onClick={() => history.push(`${APP_PREFIX_PATH}/areas/update/${record._id}`)} />
          <DeleteOutlined className='delete-btn' onClick={() => showDeleteModal(record._id)} />
        </Space>
      )
    }
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Areas'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<CreateBtn text='Add New Area' onclick={() => history.push(`${APP_PREFIX_PATH}/areas/create`)} />}
      >
        {loading ? (
          <h4 className='text-center mt-5'>Loading...</h4>
        ) : (
          areas && areas.length > 0 ? (
            <Table
              columns={columns}
              dataSource={areas}
              pagination={false}
              rowKey={data => data._id}
            />
          ) : (
            <h4 className='text-center mt-5'>NO AREAS FOUND</h4>
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
      <DisplayModal loading={loadingDetails} area={area} visible={displayVisible} onCancel={handleCancelDisplayModal} />
    </>
  )
}
