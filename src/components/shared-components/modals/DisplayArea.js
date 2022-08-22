import React from 'react'
import { Modal } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row } from 'antd'

export default function DisplayModal({ loading, area, visible, onCancel }) {
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
        <div className='create-form'>
          {loading ? (
            <h4 className='text-center mt-5'>Loading...</h4>
          ) : (
            <>
              <h3 className='mb-3'>{area && area.title}</h3>
    
              <Row gutter={16}>
                <Col span={24}>
                  <ul>
                    {area && (
                      area._teams && area._teams.map((ele) => (
                        <li key={ele._id}>{ele.title}</li>
                      ))
                    )}
                  </ul>
                </Col>
              </Row>
              <CloseOutlined onClick={onCancel} className='close-btn' />
            </>
          )}

        </div>
      </Modal>
    </>
  )
}