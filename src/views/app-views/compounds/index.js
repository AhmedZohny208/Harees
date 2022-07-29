import React from 'react'
import Breadcrumb from './Breadcrumb'
import Table from './Table'

export default function Compounds() {
  return (
    <div>
      <Breadcrumb />

      <div className='mt-4'>
        <Table />
      </div>
    </div>
  )
}
