import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';
import { useDispatch, useSelector } from 'react-redux'
import { queryServices } from 'redux/actions/Services'
import { registerTeamLead, clearErrors } from 'redux/actions/TeamLead'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { CREATE_TEAMLEAD_RESET } from 'redux/constants/TeamLead';

const { Option } = Select
const { TextArea } = Input;

export default function Form() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { services } = useSelector(state => state.allServices);
  const { teamLead, error, loading } = useSelector(state => state.registerTeamLead);

  const [formValues, setFormValues] = useState()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')
  const [service, setService] = useState('')
  const [moreDetails, setMoreDetails] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    dispatch(queryServices())

    if (teamLead) {
      setAlertError('')
      message.success('Record has been created successfully')
      history.push(`${APP_PREFIX_PATH}/teamlead`)
      dispatch({ type: CREATE_TEAMLEAD_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, teamLead, service, history])

  useEffect(() => {
    setFormValues({
      fullName, 
      email, 
      phone: `+${phonePrefix}${mobNumber}`,
      _serviceCategory: service,
      moreDetails
    })
  }, [fullName, phonePrefix, mobNumber, email, service, moreDetails])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (formValues.fullName !== '' && formValues.email !== '' && formValues._serviceCategory !== '') {
      dispatch(registerTeamLead(formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.fullName) {
      errors.fullName = "Supervisor name is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values._serviceCategory) {
      errors.service = "Service category is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={12}>
          <div className={`input ${formErrors.fullName && 'error'}`}>
            <label htmlFor="fullName">Name</label>
            <Input
              id='fullName'
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.fullName}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input ${formErrors.mobNumber && 'error'}`}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              id='phoneNumber'
              name='phoneNumber'
              value={mobNumber}
              onChange={(e) => setMobNumber(e.target.value)}
              addonBefore={prefixSelector} 
            />
            <Error className='error-sign' />
            <small>{formErrors.mobNumber}</small>
          </div>
        </Col>
        <Col span={12}>
          <div className={`input ${formErrors.email && 'error'}`}>
            <label htmlFor="email">Email Address</label>
            <Input
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.email}</small>
          </div>
        </Col>

        <Col span={12}>
          <div className={`input svg-input ${formErrors.service && 'error'}`}>
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
            <label htmlFor="moreDetails">More Details</label>
            <TextArea
              allowClear
              id='moreDetails'
              name='moreDetails'
              value={moreDetails}
              onChange={(e) => setMoreDetails(e.target.value)}
            />
          </div>
        </Col>

        <Col span={24}>
          {alertError && <Alert message={`${alertError}`} type="error" showIcon />}
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={12}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
                loading={loading ? true : false}
              >
                Add new teamlead
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
