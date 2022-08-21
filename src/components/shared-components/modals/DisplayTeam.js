import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd'

export default function DisplayModal({ loading, team, visible, onCancel }) {
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
        <div className='create-form'>
          {loading ? (
            <h4 className='text-center mt-5'>Loading...</h4>
          ) : (
            <>
              <h3 className='mb-3'>{team && team.title}</h3>
    
              <Row gutter={16}>
                <Col span={12}>
                  <div className="input">
                    <label>Service Category</label>
                    <Input disabled value={team && team._serviceCategory}/>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="input">
                    <label>Technician Count</label>
                    <Input disabled value={team && team.techniciansCount}/>
                  </div>
                </Col>
                <Col span={24}>
                  <ul>
                    {team && (
                      team._technicians && team._technicians.map((ele) => (
                        <li key={ele._id}>{ele.fullName}</li>
                      ))
                    )}
                  </ul>
                </Col>
              </Row>
            </>
          )}

        </div>
        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}