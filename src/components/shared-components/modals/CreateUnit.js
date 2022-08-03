import React, { useState, useEffect } from 'react'
import { Modal, Button, Select } from 'antd';
import {
  CloseOutlined
} from '@ant-design/icons'
import { Col, Row, Input } from 'antd';
import {ReactComponent as Error} from '../svgs/error.svg';

const { Option } = Select

export default function CreateUnit({ visible, onConfirm, onCancel }) {
  const [formValues, setFormValues] = useState()
  const [unitID, setUnitID] = useState('')
  const [compoundName, setCompoundName] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    setFormValues({ unitID, compoundName })
  }, [unitID, compoundName])

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
    if (!values.unitID) {
      errors.unitID = "Unit ID is required!";
    }
    if (!values.compoundName) {
      errors.compoundName = "Compound name is required!";
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
        <h3>Add a New Unit</h3>

        <div className='create-form'>

          <Row gutter={16}>
            <Col span={24}>
              <div className={`input ${formErrors.unitID && 'error'}`}>
                <label htmlFor="unitID">Name</label>
                <Input
                  id='unitID'
                  name='unitID'
                  value={unitID}
                  onChange={(e) => setUnitID(e.target.value)}
                />
                <Error className='error-sign' />
                <small>{formErrors.unitID}</small>
              </div>
            </Col>
            <Col span={24}>
              <div className={`input svg-input ${formErrors.compoundName && 'error'}`}>
                <label htmlFor="compoundName">Compound Name</label>
                <Select
                  dropdownAlign={{ offset: [0, 8] }}
                  onChange={(val) => setCompoundName(val)}
                >
                  <Option value='Building 71'>Building 71</Option>
                  <Option value='Building 02'>Building 02</Option>
                  <Option value='Building 01'>Building 01</Option>
                </Select>
                <Error className='error-sign' />
                <small>{formErrors.compoundName}</small>
              </div>
            </Col>
            <Col span={24}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Add new unit
              </Button>
            </Col>
          </Row>
        </div>

        <CloseOutlined onClick={onCancel} className='close-btn' />
      </Modal>
    </>
  )
}
