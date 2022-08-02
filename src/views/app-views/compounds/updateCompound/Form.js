import React, { useState } from 'react'
import { Col, Row, Button, Input, Upload } from "antd";
import { CloudUploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

export default function UpdateForm() {

  const [previewVisible, isPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState(false)
  const [fileList, setFileList] = useState([])

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

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Name</label>
            <Input defaultValue='Building 71'/>
          </div>
        </Col>
        <Col span={24}>
          <div className="input">
            <label htmlFor="">Address</label>
            <TextArea allowClear defaultValue='western region, City: Jeddah, District: Al Baghdadiyah Al Gharbiyah Dist' />
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
          >
            Add new compound
          </Button>
        </Col>
      </Row>
    </div>
  )
}
