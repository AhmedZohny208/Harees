import React from 'react'
import BreadcrumbC from './Breadcrumb'
import MainCard from './MainCard'

export default function Organization() {
  return (
    <div>
      <BreadcrumbC />

      <div className='mt-4'>
        <MainCard />
      </div>
    </div>
  )
}