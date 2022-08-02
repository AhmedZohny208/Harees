import React from 'react'
import { Col, Row, Input, Button, Select, Switch } from 'antd'

const { Option } = Select

const prefixSelector = (
  <Select
    defaultValue='+966'
    style={{
      width: 80,
    }}
  >
    <Option value="86">+86</Option>
    <Option value="87">+87</Option>
  </Select>
);

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Name</label>
            <Input/>
          </div>
        </Col>
        <Col span={16}>
          <div className="input">
            <label htmlFor="">Address</label>
            <Input/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Team Name</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='Carpentry'>Carpentry</Option>
              <Option value='Electricity'>Electricity</Option>
              <Option value='Security'>Security</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input addonBefore={prefixSelector} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <Input/>
          </div>
        </Col>

        <Col span={24}>
          <Row gutter={16} justify="space-between" align="bottom">
            <Col span={8}>
              <div className="input">
                <label htmlFor="">Username</label>
                <Input/>
              </div>
            </Col>
            <Col span={8}>
              <div className="input is-active">
                <label htmlFor="">Team Lead</label>
                <Switch />
              </div>
            </Col>
          </Row>
        </Col>


        <Col span={24}>
          <Row justify="end">
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
              >
                Add new team
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
