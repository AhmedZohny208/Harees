import React from 'react'
import BreadcrumbC from './Breadcrumb'
import { Row, Col, Card } from "antd";
import CreateForm from './Form';

export default function CreateTeam() {
  return (
    <div>
      <BreadcrumbC />

      <Row justify="center" className=''>
        <Col xs={20} sm={20} md={24} lg={10}>
        <Card className='form-card' bordered={false}>
          <CreateForm />
        </Card>
        </Col>
      </Row>
    </div>
  )
}
