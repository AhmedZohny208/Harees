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
        <Link to={`${APP_PREFIX_PATH}/home/compounds`}>Compounds</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Create a Compound
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}
