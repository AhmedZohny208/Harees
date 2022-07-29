import React from 'react'
import BreadcrumbC from './Breadcrumb'
import Table from './Table'

export default function Organization() {
  return (
    <div>
      <BreadcrumbC />

      <div className='mt-4'>
        <Table />
      </div>
    </div>
  )
}
