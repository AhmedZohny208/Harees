import React from 'react'
import { Col, Row, Input, InputNumber, Button, DatePicker, Select } from 'antd'
import moment from 'moment';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Invoice Number</label>
            <InputNumber defaultValue='11223212' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Issue Date</label>
            <DatePicker
              defaultValue={moment('2022/01/10', dateFormat)}
              format={dateFormat}
              className='small w-100 mx-0'
              placeholder=''
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Supplier Name</label>
            <Input defaultValue={'Harees co.'}/>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Supplier Address</label>
            <Input defaultValue={'Riyadh city - saudi arabia'} />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Payment Method</label>
            <Select
              defaultValue='cash'
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='cash'>cash</Option>
              <Option value='creditcard'>creditcard</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Issued By</label>
            <Select
              defaultValue='Ayman Ali'
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='Ayman Ali'>Ayman Ali</Option>
            </Select>
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="">Amount</label>
            <InputNumber defaultValue={'443'} />
          </div>
        </Col>
        <Col span={12}>
          <div className="input">
            <label htmlFor="">Status</label>
            <Select
              defaultValue='Paid'
              dropdownAlign={{ offset: [0, 8] }}
            >
              <Option value='Paid'>Paid</Option>
              <Option value='Pending'>Pending</Option>
            </Select>
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
      </Row>
    </div>
  )
}
