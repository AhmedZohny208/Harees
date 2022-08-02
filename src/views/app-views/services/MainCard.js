import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import CreateBtn from 'components/shared-components/buttons/Create'
import CreateService from 'components/shared-components/modals/CreateService'

export default function MainCard() {
  const [createVisible, isCreateVisible] = useState(false)

  const showCreateModal = () => {
    isCreateVisible(true)
  }
  const handleOkCreateModal = () => {
    isCreateVisible(false)
  }
  const handleCancelCreateModal = () => {
    isCreateVisible(false)
  }

  return (
    <>
      <Card
        className='report-card'
        title='Services'
        bordered={false}
        style={{ marginBottom: '40px' }}
        extra={<CreateBtn text='Create a new service' onclick={showCreateModal} />}
      > 
        <Row gutter={16}>
          <Col span={6}>
            <div className="item">
              <div className="desc">Plumping</div>
              <h6 className="number">12</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">AC Services</div>
              <h6 className="number">25</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Electrical Services</div>
              <h6 className="number">8</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Carpentry Services</div>
              <h6 className="number">15</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Pest Control Service</div>
              <h6 className="number">6</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Car Washing Service</div>
              <h6 className="number">76</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">House Keeping</div>
              <h6 className="number">22</h6>
            </div>
          </Col>
          <Col span={6}>
            <div className="item">
              <div className="desc">Others</div>
              <h6 className="number">24</h6>
            </div>
          </Col>
        </Row>
      </Card>

      <CreateService visible={createVisible} onCancel={handleCancelCreateModal} onConfirm={handleOkCreateModal} />
    </>
  )
}
