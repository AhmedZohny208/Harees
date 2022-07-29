import React, { useEffect } from 'react'
import { Button, Form, Input, Select } from "antd";
import { useHistory } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

const { Option } = Select;

export default function CreateForm() {
  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    form.setFieldsValue({
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'Supervisor'
    })
  }, [form])

  return (
    <Form form={form} layout="vertical" name="create-form">
      <Form.Item 
        name="name" 
        label="Nick name"
      >
        <Input />
      </Form.Item>
      <Form.Item 
        name="email" 
        label="Email"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Role'
        name="role"
      >
        <Select>
          <Option value='user'>User</Option>
          <Option value='supervisor'>Supervisor</Option>
          <Option value='admin'>Harees Admin</Option>
          <Option value='owner'>Compound Qwner</Option>
          <Option value='owner'>Compound Admin</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button 
          className='submit-btn' 
          type="primary" 
          htmlType="submit"
          onClick={() => history.push(`${APP_PREFIX_PATH}/home/supervisors`)}
        >
          Update
        </Button>
      </Form.Item>
    </Form>
  )
}
