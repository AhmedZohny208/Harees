import React from 'react'
import BreadcrumbC from './Breadcrumb'
import { Row, Col } from "antd";
import UpdateForm from './Form';

export default function UpdateSupervisor() {
  return (
    <div>
      <BreadcrumbC />

			<Row justify="center" className='mt-60'>
				<Col xs={20} sm={20} md={24} lg={9}>
					<UpdateForm />
				</Col>
			</Row>

    </div>
  )
}
