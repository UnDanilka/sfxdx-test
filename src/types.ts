export interface IEllipseProps {
  background: string
  top: string
  right?: string
  left?: string
  transform: string
}

export type PositionType = "static" | "absolute"
export interface IButtonProps {
  position: PositionType
  width: string
  height: string
  fontSize: string
}

export interface IWeb3 {
  web3: {
    account: string
    chain: string
  }
}
