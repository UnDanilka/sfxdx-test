import React from "react"
import Button from "../Button/Button"
import { ReactComponent as Logo } from "../../assets/logo.svg"

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Button />
    </div>
  )
}

export default Header
