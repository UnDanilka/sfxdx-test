// import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { connectWallet } from "../../redux/web3Slice"
import { IButtonProps } from "../../types"

const Button = ({ position, width, height, fontSize }: IButtonProps) => {
  const account = useSelector((state: any) => state.web3.account)
  const dispatch = useDispatch()

  const handleConnectWallet = () => {
    dispatch(connectWallet())
  }

  console.log("account", account)

  return (
    <div
      className="button"
      style={{ position, width, height, fontSize }}
      onClick={handleConnectWallet}
    >
      <div className="button_label">Connect Wallet</div>
    </div>
  )
}

export default Button
