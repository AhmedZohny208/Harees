import React from 'react'
import { Row, Col, Card } from "antd";
import BreadcrumbC from './Breadcrumb'
import UpdateForm from './Form'

export default function CreateOrganization() {
  return (
    <div>
      <BreadcrumbC />

      <Card className='form-card' bordered={false}>
        <Row justify="center" className=''>
          <Col xs={20} sm={20} md={24} lg={24}>
            <UpdateForm />
          </Col>
        </Row>
      </Card>
    </div>
  )
}
