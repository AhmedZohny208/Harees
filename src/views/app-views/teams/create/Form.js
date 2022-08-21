import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import { useDispatch, useSelector } from 'react-redux'
import { registerTeam, clearErrors } from 'redux/actions/Teams'
import { queryAreas } from 'redux/actions/Areas'
import { queryServices } from 'redux/actions/Services'
import { queryTechnicians } from 'redux/actions/Technicians'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { CREATE_TEAM_RESET } from 'redux/constants/Teams';

const { Option } = Select

export default function Form() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { areas } = useSelector(state => state.allAreas);
  const { services } = useSelector(state => state.allServices);
  const { technicians: allTechnicians } = useSelector(state => state.allTechnicians);
  const { team, error, loading } = useSelector(state => state.registerTeam);

  const [formValues, setFormValues] = useState()
  const [title, setTitle] = useState('')
  const [area, setArea] = useState('')
  const [service, setService] = useState('')
  const [technicians, setTechnicians] = useState([])

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    dispatch(queryAreas())
    dispatch(queryServices())
    dispatch(queryTechnicians(1, 1000, service))

    if (team) {
      setAlertError('')
      message.success('Record has been created successfully')
      history.push(`${APP_PREFIX_PATH}/teams`)
      dispatch({ type: CREATE_TEAM_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, team, service])

  useEffect(() => {
    setFormValues({
      title,
      _area: area,
      _serviceCategory: service,
      _technicians: technicians
    })
  }, [title, area, service, technicians])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (formValues.title !== '' && formValues._area !== '' && formValues._serviceCategory !== '') {
      dispatch(registerTeam(formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = "Team name is required!";
    }
    if (!values._area) {
      errors.area = "Area is required!";
    }
    if (!values._serviceCategory) {
      errors.service = "Service category is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>

        <Col span={24}>
          <div className={`input ${formErrors.title && 'error'}`}>
            <label htmlFor="title">Name</label>
            <Input
              id='title'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.title}</small>
          </div>
        </Col>

        <Col span={24}>
          <div className={`input ${formErrors.area && 'error'}`}>
            <label htmlFor="description">Area</label>
            <Select onChange={(val) => setArea(val)}>
              {areas && areas.map(ele => (
                <Option key={ele._id} value={ele._id}>{ele.title}</Option>
              ))}
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.area}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.service && 'error'}`}>
            <label htmlFor="description">Choose Service</label>
            <Select onChange={(val) => setService(val)}>
              {services && services.map(ele => (
                <Option key={ele._id} value={ele._id}>{ele.name}</Option>
              ))}
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.service}</small>
          </div>
        </Col>

        <Col span={24}>
          <div className='input'>
            <label>Choose Technicians</label>
            <Select
              mode="multiple"
              allowClear
              onChange={(val) => setTechnicians(val)}
            >
              {allTechnicians && allTechnicians.map(ele => (
                <Option key={ele._id} value={ele._id}>{ele.fullName}</Option>
              ))}
            </Select>
          </div>
        </Col>

        <Col span={24}>
          {alertError && <Alert message={`${alertError}`} type="error" showIcon />}
        </Col>

        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
            onClick={handleSubmit}
            loading={loading ? true : false}
          >
            Add new team
          </Button>
        </Col>
      </Row>
    </div>
  )
}
