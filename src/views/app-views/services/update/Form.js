import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, message, Alert, Upload } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import { useDispatch, useSelector } from 'react-redux'
import { updateService, getServiceDetails, clearErrors } from 'redux/actions/Services'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { UPDATE_SERVICE_RESET } from 'redux/constants/Services';

export default function Form({ id }) {
  let history = useHistory();
  const dispatch = useDispatch();

  const { service } = useSelector(state => state.serviceDetails)
  const { isUpdated, loading, error } = useSelector(state => state.services)

  const [formValues, setFormValues] = useState()
  const [name, setName] = useState('')
  const [arabicName, setArabicName] = useState('')
  const [professionTitle, setProfessionTitle] = useState('')
  const [arabicProfessionTitle, setArabicProfessionTitle] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [arabicDescription, setArabicDescription] = useState('')
  const [reason, setReason] = useState('')
  const [fileList, setFileList] = useState([])

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    dispatch(getServiceDetails(id))
  }, [id, dispatch])

  useEffect(() => {
    if (service) {
      setName(service.name)
      setArabicName(service.arabicName)
      setProfessionTitle(service.professionTitle)
      setArabicProfessionTitle(service.arabicProfessionTitle)
      setColor(service.color)
      setDescription(service.description)
      setArabicDescription(service.arabicDescription)
      setReason(service.reason)
    }
  }, [service])

  const handleUpload = ({fileList}) => {
    setFileList(fileList)
  };

  useEffect(() => {
    if (isUpdated) {
      setAlertError('')
      message.success('Record has been updated successfully')
      history.push(`${APP_PREFIX_PATH}/services`)
      dispatch({ type: UPDATE_SERVICE_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, isUpdated, history])

  useEffect(() => {
    setFormValues({
      name,
      arabicName,
      professionTitle,
      arabicProfessionTitle,
      color,
      description,
      arabicDescription,
      reason,
    })
  }, [name, arabicName, professionTitle, arabicProfessionTitle, color, description, arabicDescription, reason])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (
      formValues.name !== '' &&
      formValues.arabicName !== '' && 
      formValues.professionTitle !== '' && 
      formValues.arabicProfessionTitle !== '' && 
      formValues.color !== '' && 
      formValues.description !== '' && 
      formValues.arabicDescription !== '' && 
      formValues.reason !== ''
    ) {

      let formData = new FormData()
      formData.set('name', name)
      formData.set('arabicName', arabicName)
      formData.set('professionTitle', professionTitle)
      formData.set('arabicProfessionTitle', arabicProfessionTitle)
      formData.set('color', color)
      formData.set('description', description)
      formData.set('arabicDescription', arabicDescription)
      formData.set('reason', reason)
      if (fileList['0']) {
        formData.set('photo', fileList['0'].originFileObj)
      }
      dispatch(updateService(id, formData))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.name) {
      errors.name = "Service name is required!";
    }
    if (!values.arabicName) {
      errors.arabicName = "AR name is required!";
    }
    if (!values.professionTitle) {
      errors.professionTitle = "profession title is required!";
    }
    if (!values.arabicProfessionTitle) {
      errors.arabicProfessionTitle = "AR profession title is required!";
    }
    if (!values.color) {
      errors.color = "Color is required!";
    }
    if (!values.description) {
      errors.description = "Description is required!";
    }
    if (!values.arabicDescription) {
      errors.arabicDescription = "AR description is required!";
    }
    if (!values.reason) {
      errors.reason = "Reason is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={8}>
          <div className={`input ${formErrors.name && 'error'}`}>
            <label htmlFor="name">Name</label>
            <Input
              id='name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.name}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.arabicName && 'error'}`}>
            <label htmlFor="arabicName">AR Name</label>
            <Input
              id='arabicName'
              name='arabicName'
              value={arabicName}
              onChange={(e) => setArabicName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.arabicName}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.professionTitle && 'error'}`}>
            <label htmlFor="professionTitle">EN Profession Title</label>
            <Input
              id='professionTitle'
              name='professionTitle'
              value={professionTitle}
              onChange={(e) => setProfessionTitle(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.professionTitle}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.arabicProfessionTitle && 'error'}`}>
            <label htmlFor="arabicProfessionTitle">AR Profession Title</label>
            <Input
              id='arabicProfessionTitle'
              name='arabicProfessionTitle'
              value={arabicProfessionTitle}
              onChange={(e) => setArabicProfessionTitle(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.arabicProfessionTitle}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.color && 'error'}`}>
            <label htmlFor="color">Color</label>
            <Input
              id='color'
              name='color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.color}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.description && 'error'}`}>
            <label htmlFor="description">Description</label>
            <Input
              id='description'
              name='description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.description}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.arabicDescription && 'error'}`}>
            <label htmlFor="arabicDescription">AR Description</label>
            <Input
              id='arabicDescription'
              name='arabicDescription'
              value={arabicDescription}
              onChange={(e) => setArabicDescription(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.arabicDescription}</small>
          </div>
        </Col>
        <Col span={8}>
          <div className={`input ${formErrors.reason && 'error'}`}>
            <label htmlFor="reason">Reason</label>
            <Input
              id='reason'
              name='reason'
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.reason}</small>
          </div>
        </Col>

        <Col span={24}>
          <div className="input">
            <Upload
              listType="picture"
              fileList={fileList}
              onChange={handleUpload}
              beforeUpload={() => false}
              maxCount='1'
            >
              <Button className='image-upload' icon={<CloudUploadOutlined />}>Click to upload image</Button>
            </Upload>
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
                Update service
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
