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
