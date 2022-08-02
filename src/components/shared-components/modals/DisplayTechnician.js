import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input, Select, Switch } from 'antd'

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
        <h3>Asif Khan</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className="input">
                <label htmlFor="">Address</label>
                <Input disabled defaultValue='western region, Riyad city, 12 nahda street, 3rd floor'/>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Team Name</label>
                <Select
                  disabled
                  defaultValue='Carpentry'
                  dropdownAlign={{ offset: [0, 8] }}
                >
                  <Option value='Carpentry'>Carpentry</Option>
                  <Option value='Electricity'>Electricity</Option>
                  <Option value='Security'>Security</Option>
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Phone Number</label>
                <Input disabled defaultValue='68025731' addonBefore={prefixSelector} />
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
            <Col span={12}>
              <div className="input is-active">
                <label htmlFor="">Team Lead</label>
                <Switch disabled defaultChecked />
              </div>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
