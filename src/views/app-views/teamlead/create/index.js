import React from 'react'
import { Row, Col, Card } from "antd";
import BreadcrumbC from './Breadcrumb'
import CreateForm from './Form'

export default function CreateTeamlead() {
  return (
    <div>
      <BreadcrumbC />

      <Row justify="center" className=''>
        <Col xs={20} sm={20} md={24} lg={16}>
        <Card className='form-card' bordered={false}>
          <CreateForm />
        </Card>
        </Col>
      </Row>
    </div>
  )
}
