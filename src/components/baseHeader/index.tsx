import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const BaseHeader: FC<IProps> = () => {
  return <div>BaseHeader </div>
}

export default memo(BaseHeader)
