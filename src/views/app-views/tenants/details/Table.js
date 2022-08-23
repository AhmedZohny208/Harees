import React, { useState, useEffect } from 'react'
import { Table, Card, Pagination } from 'antd'

export default function TableC({tickets, currentPage, setCurrentPage}) {
  const [items, setItems] = useState([])

  useEffect(() => {
    if (tickets) {
      setItems(tickets.items)
    }
  }, [tickets])

  const columns = [
    {
      title: 'ID',
      dataIndex: '_id',
    },
    {
      title: 'Assigned Time',
      dataIndex: 'assignedTime',
    },
    {
      title: 'Assigned Date',
      dataIndex: 'assignedDate',
      render: text => <span className='fw-600'>{text && text.substr(0, 10)}</span>
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ].filter((item) => !item.hidden)

  return (
    <>
      <Card
        title='Tickets'
        bordered={false}
        style={{ marginBottom: '480px' }}
      >
        {items && items.length > 0 ? (
          <Table
            columns={columns}
            dataSource={items}
            pagination={false}
            rowKey={data => data._id}
          />
        ) : (
          <h4 className='text-center mt-5'>NO TICKETS FOUND</h4>
        )}
        <div className="pagination">
          {tickets && (
            <Pagination 
              defaultCurrent={currentPage} 
              defaultPageSize={10}
              total={tickets.itemsTotalCount} 
              onChange={(page) => {
                setCurrentPage(page)
              }}
            />
          )}
        </div>
      </Card>
    </>
  )
}
