import { useDispatch, useSelector } from "react-redux"
import { connectWallet } from "../../redux/web3Slice"
import { IButtonProps, IWeb3 } from "../../types"
import { ReactComponent as Metamask } from "../../assets/metamask.svg"
import { ReactComponent as Connected } from "../../assets/connected.svg"
import { parseAccount } from "../../utils/utils"
import { BUTTON_COLOR_GREEN, BUTTON_COLOR_WHITE } from "../../utils/constants"

const Button = ({ position, width, height, fontSize }: IButtonProps) => {
  const dispatch = useDispatch()

  const account = useSelector((state: IWeb3) => state.web3.account)
  const chain = useSelector((state: IWeb3) => state.web3.chain)
  console.log("chain", chain)

  const handleConnectWallet = () => {
    dispatch(connectWallet())
  }

  return (
    <div
      className="button"
      style={{
        position,
        width,
        height,
        fontSize:
          fontSize === "12px"
            ? account
              ? "12px"
              : "14px"
            : account
            ? "14px"
            : "18px",

        backgroundColor: account ? BUTTON_COLOR_WHITE : BUTTON_COLOR_GREEN,
        borderRadius: account ? "20px" : "8px",
      }}
      onClick={handleConnectWallet}
    >
      <div
        className="button_label"
        style={{ color: account ? BUTTON_COLOR_GREEN : BUTTON_COLOR_WHITE }}
      >
        {account ? (
          <div className="button_label_connected">
            <Metamask /> {parseAccount(account)} <Connected />
          </div>
        ) : (
          "Connect Wallet"
        )}
      </div>
    </div>
  )
}

export default Button
