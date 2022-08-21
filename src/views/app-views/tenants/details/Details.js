import React from 'react'
import { Col, Row, Input } from 'antd'

export default function Details({tenant}) {
  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="tenantName">Name</label>
            <Input
              disabled
              value={tenant && tenant.fullName}
            />
          </div>
        </Col>
        <Col span={16}>
          <div className="input">
            <label htmlFor="address">Address</label>
            <Input
              disabled
              defaultValue={tenant && tenant.address}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="area">Area</label>
            <Input
              disabled
              value={(tenant && tenant._area) && tenant._area.title}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              disabled
              defaultValue={tenant && tenant.phone}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="email">Email Address</label>
            <Input
              disabled
              defaultValue={tenant && tenant.email}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}
