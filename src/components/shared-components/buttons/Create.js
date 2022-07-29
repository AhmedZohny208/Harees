import React from 'react'
import {
  PlusCircleOutlined
} from '@ant-design/icons'

export default function Create({ text, onclick }) {
  return (
    <button className="create-btn" onClick={onclick}>
      <PlusCircleOutlined />
      {text}
    </button>
  )
}
