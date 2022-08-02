import React from 'react'
import { Col, Row, Input, InputNumber, Button } from 'antd'

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Package Name</label>
            <Input defaultValue='Platinum'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Tickets</label>
            <InputNumber defaultValue='100000'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Compounds</label>
            <InputNumber defaultValue='100'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Supervisors</label>
            <InputNumber defaultValue='20'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Tenants</label>
            <InputNumber defaultValue='10000'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Labors</label>
            <InputNumber defaultValue='100'/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Price</label>
            <InputNumber defaultValue='500'/>
          </div>
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
              >
                Update package
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
