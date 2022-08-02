import React from 'react'
import { Col, Row, Input, Button, Select } from 'antd'

const { Option } = Select

const prefixSelector = (
  <Select
    defaultValue='+966'
    style={{
      width: 80,
    }}
  >
    <Option value="86">+86</Option>
    <Option value="86">+966</Option>
    <Option value="87">+87</Option>
  </Select>
);

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Full Name</label>
            <Input defaultValue='Ayman Ali Mohamed' />
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <Input defaultValue='a.ali@harees.co' />
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input defaultValue='44325641237' addonBefore={prefixSelector} />
          </div>
        </Col>

        <Col span={24}>
          <Row align='middle'>
            <Col span={16}>
              <div className="input">
                <label htmlFor="">Password</label>
                <Input.Password />
              </div>
            </Col>
            <Col span={8}>
              <Button className="btn update-password">Update Password</Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
              >
                Update operator
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
