import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd'

export default function DisplayModal({ record, visible, onCancel }) {
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

          <h3 className='mb-3'>{record.name}</h3>

          <Row gutter={16}>
            <Col span={12}>
              <div className="input">
                <label>Service EN Name</label>
                <Input disabled value={record.name}/>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label>Service AR Name</label>
                <Input disabled value={record.arabicName}/>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label>Profession EN Title</label>
                <Input disabled value={record.professionTitle}/>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label>Profession AR Title</label>
                <Input disabled value={record.arabicProfessionTitle}/>
              </div>
            </Col>
            <Col span={24}>
              <div className="input">
                <label>EN Description</label>
                <Input disabled value={record.description}/>
              </div>
            </Col>
            <Col span={24}>
              <div className="input">
                <label>AR Description</label>
                <Input disabled value={record.arabicDescription}/>
              </div>
            </Col>
            <Col span={24}>
              <div className="input">
                <label>Reason</label>
                <Input disabled value={record.reason}/>
              </div>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}