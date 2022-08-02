import React from 'react'
import Breadcrumb from './Breadcrumb'
import CompoundsTable from './CompoundsTable'
import UnitsTable from './UnitsTable'

export default function Compounds() {
  return (
    <div>
      <Breadcrumb />

      <div className='mt-4'>
        <CompoundsTable />
        <UnitsTable />
      </div>
    </div>
  )
}
