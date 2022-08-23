import React from 'react'
import { Row, Col, Card } from "antd";
import BreadcrumbC from './Breadcrumb'
import UpdateForm from './Form'

export default function EditProfile() {
  return (
    <div>
      <BreadcrumbC />

      <Row justify="center" className=''>
        <Col xs={20} sm={20} md={24} lg={8}>
        <Card className='form-card' bordered={false}>
          <UpdateForm />
        </Card>
        </Col>
      </Row>
    </div>
  )
}
