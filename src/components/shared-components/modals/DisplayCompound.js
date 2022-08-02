import React from 'react'
import { Modal, Row, Col } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'

export default function DisplayCompound({ visible, onCancel }) {
  return (
    <>
      <Modal
        className='display-modal compound'
        title={null}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        centered
      >
        <Row gutter={16} align='middle'>
          <Col span={14}>
            <div className="image" style={{ backgroundImage: "url('https://d1b3667xvzs6rz.cloudfront.net/2022/05/madinaty-768x430.jpeg')"}}>
            </div>
          </Col>

          <Col span={10}>
            <div className="compound-info">
              <h4>Building 71</h4>
              <p>western region, City: Jeddah, District: Al Baghdadiyah Al Gharbiyah Dist</p>
            </div>
          </Col>
        </Row>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
