import { IButtonProps } from "../../types"

const Button = ({ position, width, height, fontSize }: IButtonProps) => {
  return (
    <div className="button" style={{ position, width, height, fontSize }}>
      <div className="button_label">Connect Wallet</div>
    </div>
  )
}

export default Button
