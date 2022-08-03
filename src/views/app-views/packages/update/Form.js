import React, { useState, useEffect } from 'react'
import { Col, Row, Input, InputNumber, Button } from 'antd'
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';

export default function Form() {
  const [formValues, setFormValues] = useState()
  const [packageName, setPackageName] = useState('Platinum')
  const [ticketsMaxNum, setTicketsMaxNum] = useState('100000')
  const [compoundsMaxNum, setCompoundsMaxNum] = useState('100')
  const [supervisorsMaxNum, setSupervisorsMaxNum] = useState('20')
  const [tenantsMaxNum, setTenantsMaxNum] = useState('10000')
  const [laborsMaxNum, setLaborsMaxNum] = useState('100')
  const [price, setPrice] = useState('500')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    setFormValues({
      packageName, ticketsMaxNum, compoundsMaxNum, supervisorsMaxNum, tenantsMaxNum, laborsMaxNum, price
    })
  }, [packageName, ticketsMaxNum, compoundsMaxNum, supervisorsMaxNum, tenantsMaxNum, laborsMaxNum, price])

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
    if (!values.packageName) {
      errors.packageName = "Package name is required!";
    }
    if (!values.ticketsMaxNum) {
      errors.ticketsMaxNum = "Tickets Max Number is required!";
    }
    if (!values.compoundsMaxNum) {
      errors.compoundsMaxNum = "Compounds Max Number is required!";
    }
    if (!values.supervisorsMaxNum) {
      errors.supervisorsMaxNum = "Supervisors Max Number is required!";
    }
    if (!values.tenantsMaxNum) {
      errors.tenantsMaxNum = "Tenants Max Number is required!";
    }
    if (!values.laborsMaxNum) {
      errors.laborsMaxNum = "Labors Max Number is required!";
    }
    if (!values.price) {
      errors.price = "Price is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>

      <Row gutter={16}>
        <Col span={8}>
          <div className={`input ${formErrors.packageName && 'error'}`}>
            <label htmlFor="packageName">Package Name</label>
            <Input
              id='packageName'
              name='packageName'
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.packageName}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.ticketsMaxNum && 'error'}`}>
            <label htmlFor="ticketsMaxNum">Maximum Number of Tickets</label>
            <InputNumber
              id='ticketsMaxNum'
              name='ticketsMaxNum'
              value={ticketsMaxNum}
              onChange={(val) => setTicketsMaxNum(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.ticketsMaxNum}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.compoundsMaxNum && 'error'}`}>
            <label htmlFor="compoundsMaxNum">Maximum Number of Compounds</label>
            <InputNumber
              id='compoundsMaxNum'
              name='compoundsMaxNum'
              value={compoundsMaxNum}
              onChange={(val) => setCompoundsMaxNum(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.compoundsMaxNum}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.supervisorsMaxNum && 'error'}`}>
            <label htmlFor="supervisorsMaxNum">Maximum Number of Supervisors</label>
            <InputNumber
              id='supervisorsMaxNum'
              name='supervisorsMaxNum'
              value={supervisorsMaxNum}
              onChange={(val) => setSupervisorsMaxNum(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.supervisorsMaxNum}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.tenantsMaxNum && 'error'}`}>
            <label htmlFor="tenantsMaxNum">Maximum Number of Tenants</label>
            <InputNumber
              id='tenantsMaxNum'
              name='tenantsMaxNum'
              value={tenantsMaxNum}
              onChange={(val) => setTenantsMaxNum(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.tenantsMaxNum}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.laborsMaxNum && 'error'}`}>
            <label htmlFor="laborsMaxNum">Maximum Number of Labors</label>
            <InputNumber
              id='laborsMaxNum'
              name='laborsMaxNum'
              value={laborsMaxNum}
              onChange={(val) => setLaborsMaxNum(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.laborsMaxNum}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.price && 'error'}`}>
            <label htmlFor="price">Price</label>
            <InputNumber
              id='price'
              name='price'
              value={price}
              onChange={(val) => setPrice(val)}
            />
            <Error className='error-sign' />
            <small>{formErrors.price}</small>
          </div>
        </Col>

        <Col span={24}>
          <Row justify="end">
            <Col span={6}>
              <Button 
                className='submit-btn' 
                type="primary" 
                htmlType="submit"
                onClick={handleSubmit}
              >
                Update package
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
