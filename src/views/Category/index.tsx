import { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { CategoryWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const CateGory: FC<IProps> = () => {
  return (
    <CategoryWrapper color="blue">
      CateGory
      <ul className="product-list">
        <li className="item">分类1</li>
        <li className="item">分类2</li>
        <li className="item">分类3</li>
      </ul>
    </CategoryWrapper>
  )
}

export default memo(CateGory)
