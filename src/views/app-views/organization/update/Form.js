import React from 'react'
import { Col, Row, Input, InputNumber, Button, DatePicker, Select, Switch } from 'antd'
import moment from 'moment';
import { 
  CloudUploadOutlined
} from '@ant-design/icons';

const { Option } = Select
const dateFormat = 'YYYY/MM/DD'

const prefixSelector = (
  <Select
    defaultValue='+966'
    style={{
      width: 80,
    }}
  >
    <Option value="86">+86</Option>
    <Option value="966">+966</Option>
    <Option value="87">+87</Option>
  </Select>
);

export default function Form() {
  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Organization Name</label>
            <Input defaultValue='EMAAR' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Represetitive Name</label>
            <Input defaultValue='Ahmed Ali' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Represetitive Position</label>
            <Input defaultValue='CEO' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Phone Number</label>
            <Input addonBefore={prefixSelector} defaultValue='233325255' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <Input defaultValue='a.ali@emaar.com' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">PO Number</label>
            <InputNumber defaultValue='100' />
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Package Type</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              defaultValue='Platinum'
            >
              <Option value='Platinum'>Platinum</Option>
              <Option value='Golden'>Golden</Option>
              <Option value='Silver'>Silver</Option>
              <Option value='Free-access'>Free-access</Option>
            </Select>
          </div>
        </Col>
        <Col span={8}>
          <div className="input">
            <label htmlFor="">Contract Start Date</label>
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
            <label htmlFor="">Username</label>
            <Input defaultValue='Ahmed Ali' />
          </div>
        </Col>

        <Col span={24}>
          <Row justify="space-between" align="bottom">
            <Col span={6}>
              <div className="input is-active">
                <label htmlFor="">Is Active</label>
                <Switch defaultChecked />
              </div>
            </Col>
            <Col span={6}>
              <div className="input file">
                <input type="file" id="file" />
                <label class="file" for="file">
                  <p>Attach a file</p>
                  <CloudUploadOutlined />
                </label>
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
                Update Organization
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
