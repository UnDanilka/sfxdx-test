import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ReactComponent as Close } from "../../assets/close.svg"
import { IWeb3 } from "../../types"

const Modal = () => {
  const [open, setOpen] = useState(false)

  const chain = useSelector((state: IWeb3) => state.web3.chain)
  const account = useSelector((state: IWeb3) => state.web3.account)
  useEffect(() => {
    if (account && chain !== "0x5" && chain !== "") {
      setOpen(true)
    }
  }, [account, chain])

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
