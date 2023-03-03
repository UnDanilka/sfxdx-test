import React, { useEffect, useState } from "react"
import { IEllipseProps } from "../../types"

const Ellipse = (props: IEllipseProps) => {
  const [position, setPosition] = useState({})

  useEffect(() => {
    const setRandomCoords = () => {
      setPosition({
        left: Math.floor((Math.random() * window.screen.width) / 2),
        top: Math.floor((Math.random() * window.screen.height) / 2),
      })
    }

    setRandomCoords()

    const interval = setInterval(() => {
      setRandomCoords()
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div className="ellipse" style={{ ...props, ...position }} />
}

export default Ellipse
