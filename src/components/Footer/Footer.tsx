import React from "react"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { ReactComponent as Twitter } from "../../assets/twitter.svg"
import { ReactComponent as Facebook } from "../../assets/facebook.svg"
import { ReactComponent as Instagram } from "../../assets/instagram.svg"
import { ReactComponent as YouTube } from "../../assets/youtube.svg"

const links = ["Privacy policy", "Terms & Conditions", "Cookie Policy"]
const socials = [Twitter, Facebook, Instagram, YouTube]

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_main">
        <div className="footer_main_container">
          <div className="footer_main_container_links">
            {links.map((link) => (
              <div>{link}</div>
            ))}
          </div>
          <div className="footer_main_container_logo">
            <Logo />
          </div>
          <div className="footer_main_container_socials">
            {socials.map((Link) => (
              <Link />
            ))}
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="footer_copyright_text">
          ©2022 All rights reserved. Powered by Atla
        </div>
      </div>
    </div>
  )
}

export default Footer
