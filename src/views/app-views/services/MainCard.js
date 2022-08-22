import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import { useHistory } from 'react-router-dom'
import CreateBtn from 'components/shared-components/buttons/Create'
import CreateService from 'components/shared-components/modals/CreateService'
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export default function MainCard({ services }) {
  const history = useHistory()
  
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
        extra={<CreateBtn text='Create a new service' onclick={() => history.push(`${APP_PREFIX_PATH}/services/create`)} />}
      > 
        <Row gutter={16}>
          {services && services.map(service => (
            <Col span={6}>
              <div className="item-img" style={{ backgroundColor: service.color }}>
                <div className="image" style={{ backgroundImage: `url(${service.iconPicturePath})` }}></div>
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
