import React from 'react'
import { Card, Col, Row } from 'antd'
import SelectSearch from 'components/shared-components/Form/SelectSearch'

export default function MainCard() {
  return (
    <>
      <Card
        className='report-card'
        title='Reports'
        bordered={false}
        style={{ marginBottom: '480px' }}
        extra={<SelectSearch />}
      >
        <div className="main-info">
          <h4>
            Organization Name:{' '}
            <span>EMAAR Square</span>
          </h4>
          <h4>
            Create Date:{' '}
            <span>10 Jan 2022</span>
          </h4>
        </div>
        
        <Row gutter={16}>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Compounds</div>
              <h6 className="number">5</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Total Number of Tasks</div>
              <h6 className="number">20</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Total Number of Tickets</div>
              <h6 className="number">100</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Completed Tickets</div>
              <h6 className="number">20</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Achieved Tickets</div>
              <h6 className="number">5</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Teams</div>
              <h6 className="number">4</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Technicians</div>
              <h6 className="number">22</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Number of Tenants</div>
              <h6 className="number">55</h6>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  )
}
