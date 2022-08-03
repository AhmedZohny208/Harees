import React from 'react'
import { Input } from 'antd'
import { ReactComponent as Search } from '../svgs/search.svg'

export default function TableSearch({ placeholder }) {
  return (
    <div className='table-search'>
      <Input placeholder={placeholder} />
      <Search />
    </div>
  )
}
