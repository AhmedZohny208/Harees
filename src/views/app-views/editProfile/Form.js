import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, message, Alert, Upload } from 'antd'
import { CloudUploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { updateMe, getProfileData, clearErrors } from 'redux/actions/Profile'
import { UPDATE_ME_RESET } from 'redux/constants/Profile';

export default function Form() {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.profileData)
  const { isUpdated, loading, error } = useSelector(state => state.updateMe)

  const [bgImage, setBgImage] = useState('')

  const [nickName, setNickName] = useState('')
  const [fileList, setFileList] = useState([])

  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    if (user) {
      setNickName(user.nickName)
      setBgImage(user.profilePicturePath)
    }
  }, [user])

  const handleUpload = ({fileList}) => {
    setFileList(fileList)
  };

  useEffect(() => {
    if (isUpdated) {
      setAlertError('')
      message.success('Record has been updated successfully')
      dispatch({ type: UPDATE_ME_RESET })
      dispatch(getProfileData())
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, isUpdated])

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.set('nickName', nickName)
    if (fileList['0']) {
      formData.set('photo', fileList['0'].originFileObj)
    }
    dispatch(updateMe(formData))
  }

  return (
    <div className='create-form update-profile'>
      <Row>
        <Col span={24}>
          <div className="image" style={{ backgroundImage: `url(${bgImage})` }}></div>
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
          <div className='input'>
            <label htmlFor="nickName">Nickname</label>
            <Input
              id='nickName'
              name='nickName'
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
          </div>
        </Col>

        <Col span={24}>
          {alertError && <Alert className='' message={`${alertError}`} type="error" showIcon />}
        </Col>

        <Col span={24}>
          <Button 
            className='submit-btn' 
            type="primary" 
            htmlType="submit"
            onClick={handleSubmit}
            loading={loading ? true : false}
          >
            Update
          </Button>
        </Col>
      </Row>
    </div>
  )
}
