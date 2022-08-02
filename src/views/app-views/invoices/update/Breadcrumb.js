import React from 'react'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from '../../../../configs/AppConfig';

export default function BreadcrumbC() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/home`}>Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={`${APP_PREFIX_PATH}/invoices`}>Invoices</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Update invoice
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
