import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const BaseFooter: FC<IProps> = () => {
  return <div>BaseFooter </div>
}

export default memo(BaseFooter)
