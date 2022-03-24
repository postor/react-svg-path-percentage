import { cloneElement, FC, ReactElement } from "react"

type Props = {
  percentage: number,
  offset?: number,
  children: ReactElement
}

const PathPercentage: FC<Props> = ({ percentage, offset = 0, children }) => {

  return cloneElement(children, {
    style: {
      ...children.props.style,
      strokeDasharray: `${percentage} 200`,
      strokeDashoffset: -offset
    },
    pathLength: 100,
  })
}

export default PathPercentage