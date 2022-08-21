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

export default function DisplayModal({ supervisor, loading, visible, onCancel }) {
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
        {!loading && (
          <>
            <div className="image" style={{ backgroundImage: `url(${supervisor && supervisor.profilePicturePath})` }}></div>
            <h3 className='mb-4'>{supervisor && supervisor.fullName}</h3>

            <div className='create-form'>

              <Row gutter={16}>
                <Col span={24}>
                  <div className="input">
                    <label htmlFor="">Email</label>
                    <Input disabled value={supervisor && supervisor.email}/>
                  </div>
                </Col>
                <Col span={24}>
                  <div className="input">
                    <label htmlFor="">Phone Number</label>
                    <Input disabled value={supervisor && supervisor.phone}/>
                  </div>
                </Col>
              </Row>
            </div>
          
          </>
        )}

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
