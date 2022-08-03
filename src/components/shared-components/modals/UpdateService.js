import React from 'react'
import { Modal, Button } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd';

export default function UpdateService({ visible, onConfirm, onCancel }) {
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
        <h3>Update service</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Service Name</label>
                <Input defaultValue='Plumping' />
              </div>
            </Col>
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={onConfirm}
              >
                Update
              </Button>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
