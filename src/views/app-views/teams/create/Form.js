import React from 'react'
import { Col, Row, Input, Button, Select } from 'antd'

const { TextArea } = Input;
const { Option } = Select

export default function Form() {
  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Name</label>
            <Input/>
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Description</label>
            <TextArea allowClear />
          </div>
        </Col>
        
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Team Lead</label>
            <Select>
              <Option value="Asif Khan">Asif Khan</Option>
              <Option value="Ameen Omar">Ameen Omar</Option>
              <Option value="Jacob elordi">Jacob elordi</Option>
            </Select>
          </div>
        </Col>
        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
          >
            Add new team
          </Button>
        </Col>
      </Row>
    </div>
  )
}
