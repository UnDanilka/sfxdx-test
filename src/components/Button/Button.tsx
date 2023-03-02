import { useEffect } from "react"
import { IButtonProps } from "../../types"

const Button = ({ position, width, height, fontSize }: IButtonProps) => {
  // const { ethereum } = window

  // const connectWallet = async () => {
  //   try {
  //     if (!ethereum) {
  //       return console.log("error", "Wallet is not installed")
  //     } else {
  //       const address = await ethereum.request({
  //         method: "eth_requestAccounts",
  //       })
  //       return address[0]
  //     }
  //   } catch (e) {
  //     console.log("error", "Error with wallet connecting")
  //   }
  // }

  // useEffect(() => {
  //   const { ethereum } = window
  //   const showData = (e: any) => console.log(e)
  //   ethereum.on("accountsChanged", showData)
  //   ethereum.on("chainChanged", showData)
  //   return () => {
  //     ethereum.removeListener("accountsChanged", showData)
  //     ethereum.removeListener("chainChanged", showData)
  //   }
  // }, [])

  //ethereum

  return (
    <div
      className="button"
      style={{ position, width, height, fontSize }}
      // onClick={connectWallet}
    >
      <div className="button_label">Connect Wallet</div>
    </div>
  )
}

export default Button
