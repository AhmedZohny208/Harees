import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import PrefixSelector from 'components/shared-components/PrefixSelector';
import { useDispatch, useSelector } from 'react-redux'
import { updateTenant, getTenantDetails, clearErrors } from 'redux/actions/Tenants'
import { queryAreas } from 'redux/actions/Areas'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { UPDATE_TENANT_RESET } from 'redux/constants/Tenants';

const { Option } = Select

export default function Form({ id }) {
  let history = useHistory();
  const dispatch = useDispatch();

  const { areas } = useSelector(state => state.allAreas);
  const { tenant } = useSelector(state => state.tenantDetails);
  const { isUpdated, error, loading } = useSelector(state => state.tenant);

  const [formValues, setFormValues] = useState()
  const [tenantName, setTenantName] = useState('')
  const [address, setAddress] = useState('')
  const [area, setArea] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    dispatch(getTenantDetails(id))
  }, [id])

  useEffect(() => {
    if (tenant) {
      setTenantName(tenant.fullName)
      setAddress(tenant.address)
      setArea(tenant._area._id)
      setEmail(tenant.email)
      setPhone(tenant.phone)
    }
  }, [tenant])

  useEffect(() => {
    dispatch(queryAreas(1, 1000))

    if (isUpdated) {
      setAlertError('')
      message.success('Record has been created successfully')
      history.push(`${APP_PREFIX_PATH}/tenants`)
      dispatch({ type: UPDATE_TENANT_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, isUpdated])

  useEffect(() => {
    setFormValues({
      fullName: tenantName, 
      address, 
      _area: area,
      phone,
      email,
    })
  }, [tenantName, address, area, phone, email])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    // REPEAT THE ABOVE VALIDATION
    if (formValues.fullName !== '' && formValues.address !== '' && formValues._area !== '' && formValues.email !== '') {
      dispatch(updateTenant(id, formValues))
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
    if (!phone) {
      errors.phone = "Phone number is required!";
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
              value={area}
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
          <div className={`input ${formErrors.phone && 'error'}`}>
            <label htmlFor="phone">Phone Number</label>
            <Input
              id='phone'
              name='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.phone}</small>
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
                Update tenant
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
