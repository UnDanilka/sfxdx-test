import React, { useState } from "react"
import { ReactComponent as Close } from "../../assets/close.svg"

const Modal = () => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return open ? (
    <div className="modal">
      <div className="modal_container">
        <div className="modal_container_header">
          <div className="modal_container_header_title">Wrong Network</div>
          <div className="modal_container_header_close" onClick={handleClose}>
            <Close />
          </div>
        </div>
        <div className="modal_container_content">
          Wrong network, please, select Goerli chain.
        </div>
        <div className="modal_container_accept" onClick={handleClose}>
          Okay
        </div>
      </div>
    </div>
  ) : (
    <div className="modal-hidden" />
  )
}

export default Modal
