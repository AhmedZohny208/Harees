import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd'

export default function DisplayModal({ teamLead, loading, visible, onCancel }) {
  return (
    <>
      <Modal
        className='display-modal'
        title={null}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        centered
      >
        {!loading && (
          <>
            <div className="image" style={{ backgroundImage: `url(${teamLead && teamLead.profilePicturePath})` }}></div>
            <h3 className='mb-4'>{teamLead && teamLead.fullName}</h3>

            <div className='create-form'>

              <Row gutter={16}>
                <Col span={24}>
                  <div className="input">
                    <label htmlFor="">Email</label>
                    <Input disabled value={teamLead && teamLead.email}/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="input">
                    <label htmlFor="">Phone Number</label>
                    <Input disabled value={teamLead && teamLead.phone}/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="input">
                    <label htmlFor="">Leading Team</label>
                    <Input disabled value={teamLead && teamLead._leadingTeam.title}/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="input">
                    <label htmlFor="">Service Category</label>
                    <Input disabled value={teamLead && teamLead._serviceCategory.name}/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="input">
                    <label htmlFor="">More Details</label>
                    <Input disabled value={teamLead && teamLead.moreDetails}/>
                  </div>
                </Col>
              </Row>
            </div>
          
            <CloseOutlined onClick={onCancel} className='close-btn' />
          </>
        )}

      </Modal>
    </>
  )
}
