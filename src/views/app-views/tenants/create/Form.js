import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';
import { useDispatch, useSelector } from 'react-redux'
import { registerTenant, clearErrors } from 'redux/actions/Tenants'
import { queryAreas } from 'redux/actions/Areas'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { CREATE_TENANT_RESET } from 'redux/constants/Tenants';

const { Option } = Select

export default function Form() {
  let history = useHistory();
  const dispatch = useDispatch();

  const { areas } = useSelector(state => state.allAreas);
  const { tenant, error, loading } = useSelector(state => state.registerTenant);

  const [formValues, setFormValues] = useState()
  const [tenantName, setTenantName] = useState('')
  const [address, setAddress] = useState('')
  const [area, setArea] = useState('')
  const [phonePrefix, setPhonePrefix] = useState('966')
  const [mobNumber, setMobNumber] = useState('')
  const [email, setEmail] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  const prefixSelector = <PrefixSelector setPrefix={setPhonePrefix} />

  useEffect(() => {
    dispatch(queryAreas())

    if (tenant) {
      setAlertError('')
      message.success('Record has been created successfully')
      history.push(`${APP_PREFIX_PATH}/tenants`)
      dispatch({ type: CREATE_TENANT_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, tenant])

  useEffect(() => {
    setFormValues({
      fullName: tenantName, 
      address, 
      _area: area,
      phone: `+${phonePrefix}${mobNumber}`,
      email,
    })
  }, [tenantName, address, area, phonePrefix, mobNumber, email])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    // REPEAT THE ABOVE VALIDATION
    if (formValues.fullName !== '' && formValues.address !== '' && formValues._area !== '' && formValues.email !== '') {
      dispatch(registerTenant(formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.fullName) {
      errors.tenantName = "Tenant name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values._area) {
      errors.area = "Area is required!";
    }
    if (!mobNumber) {
      errors.mobNumber = "Phone number is required!";
    }
    if (!email) {
      errors.email = "Email is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className={`input ${formErrors.tenantName && 'error'}`}>
            <label htmlFor="tenantName">Name</label>
            <Input
              id='tenantName'
              name='tenantName'
              value={tenantName}
              onChange={(e) => setTenantName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.tenantName}</small>
          </div>
        </Col>
        <Col span={16}>
          <div className={`input ${formErrors.address && 'error'}`}>
            <label htmlFor="address">Address</label>
            <Input
              id='address'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.address}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input svg-input ${formErrors.area && 'error'}`}>
            <label htmlFor="area">Area</label>
            <Select
              dropdownAlign={{ offset: [0, 8] }}
              onChange={(val) => setArea(val)}
            >
              {areas && areas.map(ele => (
                <Option key={ele._id} value={ele._id}>{ele.title}</Option>
              ))}
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.area}</small>
          </div>
        </Col>
        <Col span={8}>
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
        <Col span={8}>
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

        <Col span={24}>
          <Row justify="space-between" align='bottom' gutter={16}>
            <Col span={18}>
              {alertError && <Alert className='' message={`${alertError}`} type="error" showIcon />}
            </Col>
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
                loading={loading ? true : false}
              >
                Add new tenant
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
