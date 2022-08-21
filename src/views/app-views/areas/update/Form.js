import React, { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Select, message, Alert } from 'antd'
import { useHistory } from "react-router-dom";
import {ReactComponent as Error} from '../../../../components/shared-components/svgs/error.svg';
import { useDispatch, useSelector } from 'react-redux'
import { updateArea, clearErrors } from 'redux/actions/Areas'
import { queryTeams } from 'redux/actions/Teams'
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { UPDATE_AREA_RESET } from 'redux/constants/Areas';

const { Option } = Select

export default function Form({ id }) {
  let history = useHistory();
  const dispatch = useDispatch();

  const { teams: allTeams } = useSelector(state => state.allTeams);
  const { isUpdated, error, loading } = useSelector(state => state.area);

  const [formValues, setFormValues] = useState()
  const [title, setTitle] = useState('')
  const [teams, setTeams] = useState([])

  const [formErrors, setFormErrors] = useState({})
  const [alertError, setAlertError] = useState('')

  useEffect(() => {
    dispatch(queryTeams(1, 1000))

    if (isUpdated) {
      setAlertError('')
      message.success('Record has been updated successfully')
      history.push(`${APP_PREFIX_PATH}/areas`)
      dispatch({ type: UPDATE_AREA_RESET })
    }
    if (error) {
			setAlertError(error)
			dispatch(clearErrors())
		}
  }, [dispatch, error, isUpdated])

  useEffect(() => {
    setFormValues({
      title,
      _teams: teams
    })
  }, [title, teams])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues));
    if (formValues.title !== '') {
      dispatch(updateArea(id, formValues))
    }
  }

  const validate = (values) => {
    const errors = {}
    if (!values.title) {
      errors.title = "Area name is required!";
    }
    return errors;
  }

  return (
    <div className='create-form'>
      <Row gutter={16}>
        <Col span={24}>
          <div className={`input ${formErrors.title && 'error'}`}>
            <label htmlFor="title">Area name</label>
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
          <div className='input'>
            <label htmlFor="area">Select Teams</label>
            <Select
              mode="multiple"
              allowClear
              dropdownAlign={{ offset: [0, 8] }}
              onChange={(val) => setTeams(val)}
            >
              {allTeams && allTeams.map(ele => (
                <Option key={ele._id} value={ele._id}>{ele.title}</Option>
              ))}
            </Select>
            <Error className='error-sign' />
            <small>{formErrors.area}</small>
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
            Update Area
          </Button>
        </Col>

      </Row>
    </div>
  )
}
