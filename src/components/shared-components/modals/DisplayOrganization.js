import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input, InputNumber, DatePicker, Select, Switch } from 'antd'
import moment from 'moment';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

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
        <h3>EMAAR Details</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Organization Name</label>
                <Input disabled value='EMAAR' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Represetitive Name</label>
                <Input disabled value='Ahmed Ali' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Represetitive Position</label>
                <Input disabled value='CEO' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Phone Number</label>
                <Input disabled addonBefore={prefixSelector} value='233325255' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Email Address</label>
                <Input disabled value='a.ali@emaar.com' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">PO Number</label>
                <InputNumber disabled value='100' />
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Package Type</label>
                <Select
                  disabled
                  dropdownAlign={{ offset: [0, 8] }}
                  value='Platinum'
                >
                  <Option value='Platinum'>Platinum</Option>
                  <Option value='Golden'>Golden</Option>
                  <Option value='Silver'>Silver</Option>
                  <Option value='Free-access'>Free-access</Option>
                </Select>
              </div>
            </Col>
            <Col span={12}>
              <div className="input">
                <label htmlFor="">Contract Start Date</label>
                <DatePicker
                  disabled
                  value={moment('2022/01/10', dateFormat)}
                  format={dateFormat}
                  className='small w-100 mx-0'
                  placeholder=''
                />
              </div>
            </Col>

            <Col span={24}>
              <Row gutter={16} justify='space-between' align='bottom'>
                <Col span={12}>
                  <div className="input">
                    <label htmlFor="">Username</label>
                    <Input disabled value='Ahmed Ali' />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="input is-active">
                    <label htmlFor="">Is Active</label>
                    <Switch disabled defaultChecked />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
