import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Input, Upload } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';

const { TextArea } = Input;

export default function CreateForm() {
  const [previewVisible, isPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState(false)
  const [fileList, setFileList] = useState([])

  const [formValues, setFormValues] = useState()
  const [compoundName, setCompoundName] = useState('')
  const [address, setAddress] = useState('')

  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handlePreview = file => {
    setPreviewImage(file.thumbUrl)
    console.log(previewImage);
    console.log(file.thumbUrl);
    isPreviewVisible(true)
    console.log(previewVisible);
  }

  const handleUpload = ({fileList}) => {
    console.log('fileList', fileList);
    setFileList(fileList)
  };

  useEffect(() => {
    setFormValues({ compoundName, address })
  }, [compoundName, address])

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
    if (!values.compoundName) {
      errors.compoundName = "Compound name is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className={`input ${formErrors.compoundName && 'error'}`}>
            <label htmlFor="compoundName">Name</label>
            <Input
              id='compoundName'
              name='compoundName'
              value={compoundName}
              onChange={(e) => setCompoundName(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.compoundName}</small>
          </div>
        </Col>
        <Col span={24}>
          <div className={`input ${formErrors.address && 'error'}`}>
            <label htmlFor="address">Address</label>
            <TextArea
              allowClear
              id='address'
              name='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Error className='error-sign' />
            <small>{formErrors.address}</small>
          </div>
        </Col>
        
        <Col span={24}>
          <div className="input">
            <Upload
              listType="picture"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleUpload}
              beforeUpload={() => false}
              maxCount='1'
            >
              <Button className='image-upload' icon={<CloudUploadOutlined />}>Click to upload image</Button>
            </Upload>
          </div>
        </Col>
        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
            onClick={handleSubmit}
          >
            Add new compound
          </Button>
        </Col>
      </Row>
    </div>
  )
}
