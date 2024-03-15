import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = () => {
  return <div>页面未找到,请检查您的URL... </div>
}

export default memo(NotFound)
