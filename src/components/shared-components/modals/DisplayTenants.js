import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input, Select } from 'antd'

const { Option } = Select

const prefixSelector = (
  <Select
    disabled
    value='+966'
    style={{
      width: 80,
    }}
  >
    <Option value="86">+86</Option>
    <Option value="966">+966</Option>
    <Option value="87">+87</Option>
  </Select>
);

export default function DisplayModal({ visible, onCancel }) {
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
        <h3>Abdulrhman Mohamed</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Address</label>
                <Input disabled />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Unit ID</label>
                <Select
                  defaultValue='A13'
                  dropdownAlign={{ offset: [0, 8] }}
                >
                  <Option value='A13'>A13</Option>
                  <Option value='B1-11'>B1-11</Option>
                  <Option value='B12-12'>B12-12</Option>
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Compound</label>
                <Select
                  defaultValue='Building 71'
                  dropdownAlign={{ offset: [0, 8] }}
                >
                  <Option value='Building 71'>Building 71</Option>
                  <Option value='Building 02'>Building 02</Option>
                  <Option value='Building 01'>Building 01</Option>
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Phone Number</label>
                <Input defaultValue='68025731' addonBefore={prefixSelector} />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Email Address</label>
                <Input disabled defaultValue='k.bommini@gmail.com'/>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Username</label>
                <Input disabled defaultValue='k.bommini@gmail.com'/>
              </div>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
