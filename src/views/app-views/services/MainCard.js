import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import CreateBtn from 'components/shared-components/buttons/Create'
import CreateService from 'components/shared-components/modals/CreateService'

export default function MainCard({ services }) {
  console.log(services);
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
          {services && services.map(service => (
            <Col span={6}>
              <div className="item-img">
                <div className="image"></div>
                <div className="info">
                  <h4>{service.name}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <CreateService visible={createVisible} onCancel={handleCancelCreateModal} onConfirm={handleOkCreateModal} />
    </>
  )
}
