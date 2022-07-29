import React from 'react';
import { Modal } from 'antd';
import {
  DeleteOutlined
} from '@ant-design/icons'

export default function DeletePopup({ visible, onCancel }) {

  return (
    <>
      <Modal
        className='delete-popup'
        title={null}
        visible={visible}
        onCancel={onCancel}
        footer={null}
        closable={false}
        centered
      >
        <div className='text-center'>
          <div>
            <DeleteOutlined />
          </div>
          <h3>Sure want to delete?</h3>
          <button
            className='btn'
          >
            Confirm Deletion
          </button>
        </div>
      </Modal>
    </>
  )
}
