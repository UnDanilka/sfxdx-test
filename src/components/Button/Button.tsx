import { useDispatch, useSelector } from "react-redux"
import { connectWallet } from "../../redux/web3Slice"
import { IButtonProps } from "../../types"

const Button = ({ position, width, height, fontSize }: IButtonProps) => {
  const dispatch = useDispatch()

  const account = useSelector((state: any) => state.web3.account)
  const chain = useSelector((state: any) => state.web3.chain)
  console.log("account", account)
  console.log("chain", chain)

  const handleConnectWallet = () => {
    dispatch(connectWallet())
  }

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
