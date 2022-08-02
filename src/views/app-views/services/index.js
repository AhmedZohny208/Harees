import React from 'react'
import BreadcrumbC from './Breadcrumb'
import MainCard from './MainCard'
import Table from './Table'

export default function Services() {
  return (
    <div>
      <BreadcrumbC />

      <div className='mt-4'>
        <MainCard />
        <Table />
      </div>
    </div>
  )
}
