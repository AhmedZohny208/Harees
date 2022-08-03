import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';

const { TextArea } = Input;
const { Option } = Select

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [teamName, setTeamName] = useState('')
  const [description, setDescription] = useState('')
  const [teamLead, setTeamLead] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    setFormValues({ teamName, description, teamLead })
  }, [teamName, description, teamLead])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit])

  const validate = (values) => {
    const errors = {}
    if (!values.teamName) {
      errors.teamName = "Team name is required!";
    }
    if (!values.teamLead) {
      errors.teamLead = "Team lead is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className={`input ${formErrors.teamName && 'error'}`}>
            <label htmlFor="teamName">Name</label>
            <Input
              id='teamName'
              name='teamName'
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.teamName}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.address && 'error'}`}>
            <label htmlFor="description">Description</label>
            <TextArea
              allowClear
              id='description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.address}</small>
          </div>
        </Col>
        
        <Col span={24}>
          <div className={`input svg-input ${formErrors.teamLead && 'error'}`}>
            <label htmlFor="teamLead">Team Lead</label>
            <Select onChange={(val) => setTeamLead(val)}>
              <Option value="Asif Khan">Asif Khan</Option>
              <Option value="Ameen Omar">Ameen Omar</Option>
              <Option value="Jacob elordi">Jacob elordi</Option>
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.teamLead}</small>
          </div>
        </Col>
        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
            onClick={handleSubmit}
          >
            Add new team
          </Button>
        </Col>
      </Row>
    </div>
  )
}
