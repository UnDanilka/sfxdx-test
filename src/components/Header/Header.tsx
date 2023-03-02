import Button from "../Button/Button"
import { ReactComponent as Logo } from "../../assets/logo.svg"

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Button
          position="absolute"
          width="200px"
          height="48px"
          fontSize="18px"
        />
      </div>
      <div className="header-mobile">
        <Logo className="logo-mobile" />
        <Button position="static" width="177px" height="38px" fontSize="12px" />
      </div>
    </>
  )
}

export default Header
