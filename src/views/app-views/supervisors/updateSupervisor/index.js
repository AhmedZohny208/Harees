import React from 'react'
import BreadcrumbC from './Breadcrumb'
import { Row, Col, Card } from "antd";
import UpdateForm from './Form';

export default function UpdateSupervisor({ match }) {
  return (
    <div>
      <BreadcrumbC />

      <Row justify="center" className=''>
        <Col xs={20} sm={20} md={24} lg={10}>
        <Card className='form-card' bordered={false}>
          <UpdateForm id={match.params.id} />
        </Card>
        </Col>
      </Row>
    </div>
  )
}
