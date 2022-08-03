import React from 'react'
import { Modal, Button, Select } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd';

const { Option } = Select

export default function UpdateUnit({ visible, onConfirm, onCancel }) {
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
        <h3>Update Unit</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Unit ID</label>
                <Input defaultValue='12' />
              </div>
            </Col>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Compound Name</label>
                <Select
                  dropdownAlign={{ offset: [0, 8] }}
                  defaultValue='Building 71'
                >
                  <Option value='Building 71'>Building 71</Option>
                  <Option value='Building 02'>Building 02</Option>
                  <Option value='Building 01'>Building 01</Option>
                </Select>
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
