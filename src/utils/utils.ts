import {
  COLOR_BLUE,
  COLOR_GREEN,
  LEFT_COORDS,
  RIGHT_COORDS,
  ROTATE_LEFT,
  ROTATE_RIGHT,
  TOP_COORDS_DOWN,
  TOP_COORDS_UP,
} from "./constants"

import { ReactComponent as Twitter } from "../assets/twitter.svg"
import { ReactComponent as Facebook } from "../assets/facebook.svg"
import { ReactComponent as Instagram } from "../assets/instagram.svg"
import { ReactComponent as YouTube } from "../assets/youtube.svg"
export const ellipseData = [
  {
    background: COLOR_BLUE,
    left: LEFT_COORDS,
    top: TOP_COORDS_UP,
    transform: ROTATE_LEFT,
  },
  {
    background: COLOR_GREEN,
    right: RIGHT_COORDS,
    top: TOP_COORDS_UP,
    transform: ROTATE_RIGHT,
  },
  {
    background: COLOR_GREEN,
    left: LEFT_COORDS,
    top: TOP_COORDS_DOWN,
    transform: ROTATE_LEFT,
  },
  {
    background: COLOR_BLUE,
    right: RIGHT_COORDS,
    top: TOP_COORDS_DOWN,
    transform: ROTATE_RIGHT,
  },
]

export const links = ["Privacy policy", "Terms & Conditions", "Cookie Policy"]
export const socials = [Twitter, Facebook, Instagram, YouTube]

export const parseAccount = (account: string) => {
  const array = account.split("")
  const first10 = array.slice(0, 10)
  const last4 = array.slice(-4)
  const combined = [...first10, ".", ".", ".", ...last4]
  return combined.join("")
}
