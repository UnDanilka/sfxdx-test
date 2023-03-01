import React, { useEffect, useState } from "react"

const Ellipse = (props: any) => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    setPosition({
      left: Math.floor(Math.random() * window.screen.width),
      top: Math.floor(Math.random() * window.screen.height),
    })

    setInterval(() => {
      setPosition({
        left: Math.floor(Math.random() * window.screen.width),
        top: Math.floor(Math.random() * window.screen.height),
      })
    }, 5000)
  }, [])

  return <div className="ellipse" style={{ ...props, ...position }} />
}

export default Ellipse
