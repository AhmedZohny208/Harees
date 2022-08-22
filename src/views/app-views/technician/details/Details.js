import React from 'react'
import { Col, Row, Input } from 'antd'

export default function Details({ technician }) {
  return (
    <div className='create-form'>
      <Row gutter={16}>

        <Col span={8}>
          <div className="input">
            <label>Name</label>
            <Input disabled value={technician && technician.fullName} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>Email</label>
            <Input disabled value={technician && technician.email} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>Phone Number</label>
            <Input disabled value={technician && technician.phone} />
          </div>
        </Col>

        <Col span={8}>
          <div className="input">
            <label>Team Name</label>
            <Input disabled value={technician && (technician._team && technician._team.title)} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>Service Category</label>
            <Input disabled value={technician && technician._serviceCategory.name} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>More Details</label>
            <Input disabled value={technician && technician.moreDetails} />
          </div>
        </Col>

        <Col span={8}>
          <div className="input">
            <label>Completed Tickets</label>
            <Input disabled value={technician && technician.stats.completedTickets} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>Rating</label>
            <Input disabled value={technician && technician.stats.rating} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label>Review Count</label>
            <Input disabled value={technician && technician.stats.reviewsCount} />
          </div>
        </Col>

      </Row>
    </div>
  )
}
