import React from 'react'
import { Modal, Button } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd';

export default function CreateService({ visible, onConfirm, onCancel }) {
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
        <h3>Create a New Service</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Service Name</label>
                <Input />
              </div>
            </Col>
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={onConfirm}
              >
                Create new service
              </Button>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
