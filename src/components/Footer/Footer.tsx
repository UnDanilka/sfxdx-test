import { ReactComponent as Logo } from "../../assets/logo.svg"
import { PositionType } from "../../types"
import { links, socials } from "../../utils/utils"

const Footer = () => {
  const linksComponent = (position: PositionType) => {
    return (
      <div
        className="footer_main_container_links"
        style={{
          position,
          textAlign: position === "static" ? "center" : "start",
        }}
      >
        {links.map((link, i) => (
          <div key={i}>{link}</div>
        ))}
      </div>
    )
  }

  const socialsComponent = (position: PositionType) => {
    return (
      <div className="footer_main_container_socials" style={{ position }}>
        {socials.map((Link, i) => (
          <Link key={i} />
        ))}
      </div>
    )
  }

  const copyrightComponent = () => {
    return (
      <div className="footer_copyright">
        <div className="footer_copyright_text">
          ©2022 All rights reserved. Powered by Atla
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="footer">
        <div className="footer_main">
          <div className="footer_main_container">
            {linksComponent("absolute")}
            <div className="footer_main_container_logo">
              <Logo />
            </div>
            {socialsComponent("absolute")}
          </div>
        </div>
        {copyrightComponent()}
      </div>
      <div className="footer-mobile">
        <Logo className="logo-mobile" />
        {linksComponent("static")}
        {socialsComponent("static")}
        {copyrightComponent()}
      </div>
    </>
  )
}

export default Footer
