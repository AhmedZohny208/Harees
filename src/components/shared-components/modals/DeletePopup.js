import React from 'react';
import { Modal } from 'antd';
import {
  DeleteOutlined
} from '@ant-design/icons'

export default function DeletePopup({ onConfirm, visible, onCancel }) {

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

          <div className="action-btns">
            <button
              className='btn cancel'
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className='btn confirm'
              onClick={onConfirm}
            >
              Confirm Deletion
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
