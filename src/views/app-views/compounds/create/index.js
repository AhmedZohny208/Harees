import React from 'react'
import BreadcrumbC from './breadcrumb'
import { Row, Col } from "antd";
import CreateForm from './Form';

export default function CreateSupervisor() {
  return (
    <div>
      <BreadcrumbC />

			<Row justify="center" className='mt-60'>
				<Col xs={20} sm={20} md={24} lg={9}>
					<CreateForm />
				</Col>
			</Row>

    </div>
  )
}
