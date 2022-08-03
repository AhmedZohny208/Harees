import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd';
import {ReactComponent as Error} from '../svgs/error.svg';

export default function CreateService({ visible, onConfirm, onCancel }) {
  const [formValues, setFormValues] = useState()
  const [serviceName, setServiceName] = useState('Plumping')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    setFormValues({ serviceName })
  }, [serviceName])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      onConfirm()
    }
  }, [formErrors, formValues, isSubmit, onConfirm])

  const validate = (values) => {
    const errors = {}
    if (!values.serviceName) {
      errors.serviceName = "Service name is required!";
    }
    return errors;
  }

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
        <h3>Create a New Service</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className={`input ${formErrors.serviceName && 'error'}`}>
                <label htmlFor="serviceName">Name</label>
                <Input
                  id='serviceName'
                  name='serviceName'
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                />
                <Error className='error-sign' />
                <small>{formErrors.serviceName}</small>
              </div>
            </Col>
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Create new service
              </Button>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
