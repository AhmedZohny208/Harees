import React from 'react'
import { Col, Row, Input, InputNumber, Button } from 'antd'

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Package Name</label>
            <Input/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Tickets</label>
            <InputNumber/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Compounds</label>
            <InputNumber/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Supervisors</label>
            <InputNumber/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Tenants</label>
            <InputNumber/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Maximum Number of Labors</label>
            <InputNumber/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Price</label>
            <InputNumber/>
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
                Create new package
              </Button>
            </Col>
          </Row>
        </Col>

        <div className='w-100 text-right'>
          
        </div>
      </Row>
    </div>
  )
}
