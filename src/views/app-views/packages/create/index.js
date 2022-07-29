import React from 'react'
import { Row, Col } from "antd";
import BreadcrumbC from './Breadcrumb'
import CreateForm from './Form'

export default function CreatePackage() {
  return (
    <div>
      <BreadcrumbC />

      <Row justify="center" className='mt-60'>
				<Col xs={20} sm={20} md={24} lg={21}>
					<CreateForm />
				</Col>
			</Row>
    </div>
  )
}
